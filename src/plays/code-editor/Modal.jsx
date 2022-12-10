import { Fragment, useState, useEffect } from 'react';

import './modal.css';

import close from './close.png';

const Modal = ({ showModal, toggle }) => {
  const [currState, setCurrentState] = useState(0);

  const structuringData = [
    {
      info: 'Its a code editor for html css and js made using codemirror your can write your code seprately for html css and js. '
    },
    {
      info: 'Javascript will work normally and can be used to manipulate things but their will not be shown any output for it like for console loging.'
    },
    {
      info: 'Css output will be shown when try to make style changes using it.'
    },
    {
      info: 'Lastly all your output will be displayed in output section as you type.'
    }
  ];

  useEffect(() => {
    setCurrentState(0);
  }, [showModal]);

  const buttonHandler = (val) => () => {
    if ((currState === 0 && val < 0) || (currState === 3 && val > 0)) return;
    setCurrentState(currState + val);
  };
  if (!showModal) return false;

  return (
    <Fragment>
      <div className="code-editor-modal">
        <img alt="close" className="close-icon" src={close} onClick={toggle} />
        <div className="content">
          <h1 className="text">How to Use!</h1>
          <p>{structuringData[currState].info}</p>
          <div className="button-section">
            {currState > 0 ? <button onClick={buttonHandler(-1)}>Prev</button> : <p />}
            <button onClick={currState === 3 ? toggle : buttonHandler(1)}>
              {currState === 3 ? 'Done' : 'Next'}
            </button>
          </div>
        </div>
      </div>
      <div className="code-editor-backdrop" onClick={toggle} />
    </Fragment>
  );
};

export default Modal;
