import React, { useState } from "react";
import { calculateSavings } from "../../utils/calculateSavings";
import "./savingOptions.scss";

function SavingOptions(props) {
  const { currency, setCurrency, setTotal } = props;

  const [startingBalance, setStartingBalance] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [period, setPeriod] = useState(1);
  const [periodChoice, setPeriodChoice] = useState("Years");
  const [annualInterest, setAnnualInterest] = useState(8);

  const handleSubmit = (event) => {
    event.preventDefault();

    const total = calculateSavings({
      startingBalance,
      monthlyContribution,
      period,
      periodChoice,
      annualInterest,
    });

    setTotal(total);
  };

  return (
    <div className="savingOptions">
      <div className="savingOptions__currencies">
        <div
          className={`savingOptions__currency ${
            currency === "INR" ? "savingOptions__currency--selected" : ""
          }`}
          onClick={() => setCurrency("INR")}
          data-testid="currency-inr"
        >
          <h4>INR</h4>
        </div>
        <div
          className={`savingOptions__currency ${
            currency === "USD" ? "savingOptions__currency--selected" : ""
          }`}
          onClick={() => setCurrency("USD")}
          data-testid="currency-usd"
        >
          <h4>USD</h4>
        </div>
      </div>
      <form>
        <div className="savingOptions__formGroup">
          <label htmlFor="starting-balance">Starting Balance:</label>
          <div className="savingOptions__inputGroup">
            <div className="savingOptions__inputPrepend">
              {currency === "INR" ? "₹" : "$"}
            </div>
            <input
              type="number"
              className="savingOptions__formControl"
              id="starting-balance"
              placeholder="Enter initial balance"
              value={startingBalance}
              onChange={(e) => setStartingBalance(e.target.value)}
            />
          </div>
        </div>
        <div className="savingOptions__formGroup">
          <label htmlFor="monthly-contribution">Monthly Contribution:</label>
          <div className="savingOptions__inputGroup">
            <div className="savingOptions__inputPrepend">
              {currency === "INR" ? "₹" : "$"}
            </div>
            <input
              type="number"
              className="savingOptions__formControl"
              id="monthly-contribution"
              placeholder="Enter monthly contribution"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
            />
          </div>
        </div>
        <div className="savingOptions__formGroup">
          <label htmlFor="period">Period:</label>
          <div className="savingOptions__inputGroup">
            <input
              type="number"
              className="savingOptions__formControl"
              id="period"
              placeholder="Enter period of contribution"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            />
          </div>
        </div>
        <div className="savingOptions__periodChoice">
          <div className="savingOptions__formRadio">
            <input
              className="savingOptions__radioInput"
              type="radio"
              name="period-choice"
              id="period-choice-years"
              value="years"
              defaultChecked
              onChange={() => setPeriodChoice("Years")}
            />
            <label
              className="savingOptions__radioLabel"
              htmlFor="period-choice-years"
            >
              Years
            </label>
          </div>
          <div className="savingOptions__formRadio">
            <input
              className="savingOptions__radioInput"
              type="radio"
              name="period-choice"
              id="period-choice-months"
              value="months"
              onChange={() => setPeriodChoice("Months")}
            />
            <label
              className="savingOptions__radioLabel"
              htmlFor="period-choice-months"
            >
              Months
            </label>
          </div>
        </div>
        <div className="savingOptions__formGroup">
          <label htmlFor="annual-interest-rate">
            Annual Interest Rate (%):
          </label>
          <div className="savingOptions__inputGroup">
            <input
              type="number"
              className="savingOptions__formControl"
              id="annual-interest-rate"
              placeholder="Enter interest rate per annum"
              value={annualInterest}
              onChange={(e) => setAnnualInterest(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="savingOptions__calculate"
          onClick={handleSubmit}
        >
          Calculate Total
        </button>
      </form>
    </div>
  );
}

export default SavingOptions;
