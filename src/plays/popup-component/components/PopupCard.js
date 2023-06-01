import React, { useState } from 'react';
import './styles.css';

function PopupCard({ children, popTitle, btnStyle }) {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button className="modal-btn" style={btnStyle} onClick={toggleModal}>
        {popTitle}
      </button>
      {toggle ? (
        <div>
          <div className="popup-bg-overlay" onClick={toggleModal} />
          <div className="popup-content-wrapper">
            {children}
            <button className="close_modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PopupCard;
