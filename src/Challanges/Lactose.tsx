function getIsLactoseTolerant() {
  return true; // or  false
}

const Lactose = () => {
  return (
    <div>
      {getIsLactoseTolerant() ? <LactoseTolerant /> : <LactoseIntolerant />}
    </div>
  );
};

function LactoseIntolerant() {
  return (
    <h1>
      <span role="img" aria-label="grass and muds">
        eats grass!
      </span>
    </h1>
  );
}
function LactoseTolerant() {
  return (
    <h1>
      <span role="img" aria-label="dairy products">
        eats meats/milks!
      </span>
    </h1>
  );
}

export default Lactose;
