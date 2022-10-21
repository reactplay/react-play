import React from "react";
import Total from "./components/Total";
import SavingOptions from "./components/SavingOptions";
import "./styles/savingsCalculator.scss";

function SavingsCalculator() {
  return (
    <div className="savingsCalculator__container">
      <div className="savingsCalculator">
        <Total />
        <SavingOptions />
      </div>
    </div>
  );
}

export default SavingsCalculator;
