import { useState } from "react";
import useWindowSize from "./useWindowSize";

const TipCalculator = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);

  const [bill, setBill] = useState(100);
  const [tipPercent, setTipPercent] = useState(18);
  const [payee, setPayee] = useState(1);

  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) =>
    setBill(onlyNumber(e.target.value));

  const handleTipPercent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTipPercent(onlyNumber(e.target.value));

  const handlePayee = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPayee(onlyNumber(e.target.value));

  const totalTip = (bill * tipPercent) / 100;
  const perPersonTip = totalTip / payee;
  const totalBill = bill + totalTip;
  const billPerPerson = totalBill / payee;

  return (
    <>
      <div
        className="outerDiv"
        style={
          windowSize.width! >= 600 ? styles.desktopStyle : styles.mobileStyle
        }
      >
        <label htmlFor="bill">Bill: </label>
        <input
          id="bill"
          type="number"
          min="1"
          value={bill}
          onChange={handleBill}
        />
        <label htmlFor="tipPercent"> Tip Percentage: </label>
        <input
          id="tipPercent"
          type="number"
          min="0"
          value={tipPercent}
          onChange={handleTipPercent}
        />
        <label htmlFor="payee"> Total No. Payee: </label>
        <input
          id="payee"
          type="number"
          min="1"
          value={payee}
          onChange={handlePayee}
        />

        <p
          style={{
            paddingTop: "2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label>
            Total Tip: {isNaN(totalTip) ? "---" : `$${totalTip.toFixed(2)}`}
          </label>
          <label>
            Tip per Person:{" "}
            {isNaN(perPersonTip) ? "---" : `$${perPersonTip.toFixed(2)}`}
          </label>
          <label>
            Bill per Person:{" "}
            {isNaN(billPerPerson) ? "---" : `$${billPerPerson.toFixed(2)}`}
          </label>
          <label>
            Total Bill: {isNaN(totalBill) ? "---" : `$${totalBill}`}
          </label>
        </p>
      </div>
    </>
  );
};

const styles = {
  desktopStyle: {
    backgroundColor: "#ba3b50",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "5% 15% 0 15%",
  },
  mobileStyle: {
    backgroundColor: "#f4f4f4",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "15% 25% 0 25%",
  },
} as const;

/* top | right | bottom | left */
//margin: 2px 1em 0 auto;
function onlyNumber(str: string) {
  const rawString = str.replace(/\D/g, ""); //only allow number in input box to be typed.
  return parseInt(rawString); //then convert that number in string to Integer
}

export default TipCalculator;
