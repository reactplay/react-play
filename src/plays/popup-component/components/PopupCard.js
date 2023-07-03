import React, { useState } from 'react';
import './styles.css';

function PopupCard({ children, popTitle, btnStyle }) {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button className="modal-toggle-btn" style={btnStyle} onClick={toggleModal}>
        {popTitle}
      </button>
      {toggle ? (
        <div>
          <div className="popup-bg-overlay" onClick={toggleModal} />
          <div className="popup-container">
            {children}
            <button className="close_popup" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PopupCard;
