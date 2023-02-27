import { Fragment, useState, useEffect } from 'react';

import './Modal.css';

import { MdClose } from 'react-icons/md';

const Modal = ({ showModal, toggle }) => {
  const [currState, setCurrentState] = useState(0);

  const structuringData = [
    {
      info: 'Digits Delight is an app, that tells facts about numbers. You can read and listen facts about numbers.'
    },
    {
      info: 'This app is divided into 3 categories.'
    },
    {
      info: 'The 1st one is the random fact section, where, on clicking on the random button, you will get 3 random facts about numbers.'
    },
    {
      info: 'The 2nd one is Number Fact Section, where you will enter the number, and on clicking on the `get facts` button, you will get the fact about that number.'
    },
    {
      info: 'In the 3rd and the last category, you will get on scrolling a bit. Here, you can listen to facts by different categories and you can listen to them by choosing different voices.'
    },
    {
      info: 'There are infinite numbers present in the world, so there can be a possibility to not have a fact about it so for that, you can add facts about that number here -> http://numbersapi.com.'
    },
    {
      info: 'Now, Enjoy our app!.'
    }
  ];

  useEffect(() => {
    setCurrentState(0);
  }, [showModal]);

  const buttonHandler = (val) => () => {
    if ((currState === 0 && val < 0) || (currState === 6 && val > 0)) return;
    setCurrentState(currState + val);
  };
  if (!showModal) return false;

  return (
    <Fragment>
      <div className="digits-delight-modal">
        <MdClose className="close-icon" onClick={toggle} />
        <div className="content">
          <h1 className="text">Give me a Tour</h1>
          <p>{structuringData[currState].info}</p>
          <div className="button-section">
            {currState > 0 ? <button onClick={buttonHandler(-1)}>Prev</button> : <p />}
            <button onClick={currState === 6 ? toggle : buttonHandler(1)}>
              {currState === 6 ? 'Done' : 'Next'}
            </button>
          </div>
        </div>
      </div>
      <div className="digits-delight-backdrop" onClick={toggle} />
    </Fragment>
  );
};

export default Modal;
