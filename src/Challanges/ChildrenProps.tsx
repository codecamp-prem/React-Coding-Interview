import { ReactNode } from "react";

function Badge({
  name,
  img,
  handle,
  children,
}: {
  name: string;
  img: string;
  handle: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid",
        borderRadius: 8,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
        {children}
      </div>
    </div>
  );
}
const ChildrenProps = () => {
  const addAsFriend = () => alert("Friend Added");
  return (
    <Badge
      name="John Doe"
      handle="johndoe"
      img="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    >
      <p>
        John Doe likes to lie down in Autopsy slab. He also love to be
        mysterious.
      </p>
      <button onClick={addAsFriend}>Add as Friend</button>
    </Badge>
  );
};

export default ChildrenProps;
