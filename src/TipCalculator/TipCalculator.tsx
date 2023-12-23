import { useState } from "react";

const TipCalculator = () => {
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
      <div className="outerDiv" style={styles.outerDiv}>
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
  outerDiv: {
    backgroundColor: "#f1f1f1",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "5% 15% 0 15%",
  },
} as const;

/* top | right | bottom | left */
//margin: 2px 1em 0 auto;
function onlyNumber(str: string) {
  const rawString = str.replace(/\D/g, ""); //only allow number in input box to be typed.
  return parseInt(rawString); //then convert that number in string to Integer
}

export default TipCalculator;
