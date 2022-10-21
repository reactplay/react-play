import React, { useState } from "react";
import Total from "./components/Total";
import SavingOptions from "./components/SavingOptions";
import "./styles/savingsCalculator.scss";

function SavingsCalculator() {
  const [total, setTotal] = useState(2327);
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="savingsCalculator__container">
      <div className="savingsCalculator">
        <Total total={total} currency={currency} />
        <SavingOptions
          currency={currency}
          setCurrency={setCurrency}
          setTotal={setTotal}
        />
      </div>
    </div>
  );
}

export default SavingsCalculator;
