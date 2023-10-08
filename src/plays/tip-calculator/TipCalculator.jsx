'use client';
import React, { useState, useEffect } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import BillAmount from './components/BillAmount';
import TipAmount from './components/TipAmount';
import PeopleAmount from './components/PeopleAmount';
import DisplayCard from './components/DisplayCard';

// WARNING: Do not change the entry componenet name

function TipCalculator(props) {
  // Your Code Start below.

  const [bill, setBill] = useState();
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [total, setTotal] = useState(0);

  const handleResetTip = (e) => {
    e.preventDefault();
    setBill(0);
    setPeople(0);
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill && tip && people) {
      const tipAmount = Number(bill) * Number(tip);
      const totalAmount = Number(bill) + tipAmount;

      setTipPerPerson(tipAmount / people);
      setTotalPerPerson(totalAmount / people);
      setTotal(totalAmount);
    }
  }, [bill, tip, people]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <main className="flex h-fit flex-col items-center justify-center p-7 lg:p-5">
            <h1 className="mb-3 text-center text-3xl font-bold uppercase tracking-widest text-cyan-800">
              Tip Splitter
            </h1>
            <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl">
              <div className="px-4 py-5 sm:p-6">
                <form className="mx-auto grid max-w-6xl gap-y-5 lg:grid-cols-2 lg:gap-x-8">
                  <div className="flex flex-col gap-y-8 py-5 lg:px-5 lg:py-6">
                    <BillAmount bill={bill} setBill={setBill} />
                    <TipAmount setTip={setTip} />
                    <PeopleAmount people={people} setPeople={setPeople} />
                  </div>

                  <DisplayCard
                    reset={handleResetTip}
                    tipPerPerson={tipPerPerson}
                    total={total}
                    totalPerPerson={totalPerPerson}
                  />
                </form>
              </div>
            </div>
          </main>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TipCalculator;
