import React, { useState } from "react";
import { FaRegQuestionCircle } from 'react-icons/fa';
import "../Game2048Styles/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        <FaRegQuestionCircle />
      </button>

      {modal && (
        <div className="twentyFourtyEight-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="mb-4 font-extrabold">HOW TO PLAY</h2>
            <p className="twentyfourtyeight-modal-para-one">
              Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!
            </p>
            <br />
            <p className="twentyfourtyeight-modal-para-two">
              Join the numbers and get the <b>2048 tile!</b>to WIN.
            </p>
            <button className="close-modal font-extrabold text-red-500" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
