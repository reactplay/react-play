import { getCurrencySymbol } from 'plays/savings-calculator/utils/getCurrencySymbol';
import React from 'react';
import PiggyBankImage from '../../images/piggy-bank.png';
import './total.scss';

function Total(props) {
  const { total, currency } = props;

  return (
    <div className="savingCalculator__total">
      <img alt="piggy-bank" className="total__piggyBank" src={PiggyBankImage} />
      <div className="total__endBalance">
        <h3 className="total__heading">End Balance:</h3>
        <h1 className="total__value">
          {getCurrencySymbol(currency)}
          {total}
        </h1>
      </div>
    </div>
  );
}

export default Total;
