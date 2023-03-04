import { Fragment, useState, useEffect } from 'react';
import { structuringData } from './DigitsDelightsConstant';

import './Modal.css';

import { MdClose } from 'react-icons/md';

const Modal = ({ showModal, toggle }) => {
  const [currState, setCurrentState] = useState(0);
  const data = structuringData[currState];

  useEffect(() => {
    setCurrentState(0);
  }, [showModal]);

  const buttonHandler = (val) => () => {
    if ((currState === 0 && val < 0) || (currState === 6 && val > 0)) return;
    setCurrentState(currState + val);
  };
  if (!showModal) return null;

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
