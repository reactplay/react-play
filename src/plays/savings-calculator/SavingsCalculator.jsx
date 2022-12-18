import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Total from './components/Total';
import SavingOptions from './components/SavingOptions';
import './styles/savingsCalculator.scss';

function SavingCalculator(props) {
  const [total, setTotal] = useState(2327);
  const [currency, setCurrency] = useState('INR');

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="savingsCalculator__container">
            <div className="savingsCalculator">
              <Total currency={currency} total={total} />
              <SavingOptions currency={currency} setCurrency={setCurrency} setTotal={setTotal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavingCalculator;
