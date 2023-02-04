import React, { useState, useEffect } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import '../Game2048Styles/Modal.css';

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((previous) => !previous);
  };

  useEffect(() => {
    document.body.classList.add('twenty-forty-eight-active-modal');
  }, [modal]);

  return (
    <>
      <button
        className={`${props.status === 'over' ? 'hide' : 'twenty-forty-eight-btn-modal'}`}
        onClick={toggleModal}
      >
        <FaRegQuestionCircle />
      </button>

      {modal && (
        <div className="twenty-forty-eight-modal">
          <div className="twenty-forty-eight-overlay" onClick={toggleModal} />
          <div className="twenty-forty-eight-modal-content">
            <h2 className="mb-4 font-extrabold">HOW TO PLAY</h2>
            <p className="twenty-forty-eight-modal-para-one">
              Use your arrow keys to move the tiles. When two tiles with the same number touch, they
              merge into one!
            </p>
            <br />
            <p className="twenty-forty-eight-modal-para-two">
              Join the numbers and get the <b>2048 tile!</b>to WIN.
            </p>
            <button
              className="twenty-forty-eight-close-modal font-extrabold text-red-500"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
