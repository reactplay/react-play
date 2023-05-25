import React, { useState } from 'react';
import './styles.css';

function popupCard({ children, popTitle, btnStyle }) {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button className="modal__btn" style={btnStyle} onClick={toggleModal}>
        {popTitle}
      </button>
      {toggle && (
        <div>
          <div className="overlay" onClick={toggleModal} />
          <div className="modal_content">
            {children}
            <button className="close_modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default popupCard;
