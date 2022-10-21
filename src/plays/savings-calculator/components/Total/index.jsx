import React from "react";
import PiggyBank from "../../images/piggy-bank.png";
import "./total.scss";

function Total() {
  return (
    <div className="total">
      <img src={PiggyBank} alt="piggy-bank" className="total__piggyBank" />
      <div className="total__endBalance">
        <h3 className="total__heading">End Balance:</h3>
        <h1 className="total__value">₹5000</h1>
      </div>
    </div>
  );
}

export default Total;
