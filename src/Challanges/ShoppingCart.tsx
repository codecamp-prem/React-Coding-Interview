import { useReducer } from "react";
import "./common.css";

const products = [
  { id: 1, name: "Poké Ball", price: 10 },
  { id: 2, name: "Great Ball", price: 20 },
  { id: 3, name: "Ultra Ball", price: 30 },
];

type CartProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
const initialState: CartProps[] = [];

function reducer(carts: CartProps[], action: { [key: string]: any }) {
  if (action.type === "add") {
    const inCart = Boolean(carts.find((item) => item.id === action.id));

    if (!inCart) {
      const product = products.find((p) => p.id === action.id);
      return [...carts, { ...product, quantity: 1 }];
    }

    return carts.map((item) =>
      item.id === action.id ? { ...item, quantity: item?.quantity + 1 } : item
    );
  } else if (action.type === "update") {
    if (action.adjustment === "increment") {
      return carts.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    // now decrement
    // check the item quantity in cart
    const item = carts.find(({ id }) => action.id === id);

    if (item?.quantity === 1) {
      // remove the item totally from cart
      return carts.filter((item) => item.id !== action.id);
    } else {
      return carts.map((item) =>
        item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    }
  } else {
    throw new Error("This action type isn't supported");
  }
}

function calculateTotal(carts: CartProps[]) {
  return carts.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
}

export default function ShoppingCart() {
  const [carts, dispatch] = useReducer(reducer, initialState);
  const handleAddToCart = (id: number) => dispatch({ type: "add", id });

  const handleUpdateQuantity = (id: number, adjustment: string) => {
    dispatch({ type: "update", id, adjustment });
  };

  return (
    <div className="container">
      <main>
        <h1>Pokemon Mart</h1>
        <section>
          <div>
            <ul className="carts">
              {products.map((product) => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                  <button
                    className="primary"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Add to Cart
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <hr />
        <aside>
          <div>
            <h2>Shopping Cart</h2>
            <ul className="carts">
              {carts.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <div>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, "decrement")}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => handleUpdateQuantity(item.id, "increment")}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
              {!carts.length && <li>Cart is empty</li>}
            </ul>
          </div>
          <hr />
          <h3>Total: ${calculateTotal(carts)}</h3>
        </aside>
      </main>
    </div>
  );
}
