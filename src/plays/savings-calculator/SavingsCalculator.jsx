import React from "react";
import Total from "./components/Total";
import "./styles/savingsCalculator.scss";

function SavingsCalculator() {
  return (
    <div className="savingsCalculator__container">
      <div className="savingsCalculator">
        <Total />
      </div>
    </div>
  );
}

export default SavingsCalculator;
