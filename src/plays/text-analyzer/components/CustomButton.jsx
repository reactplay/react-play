import React from 'react';
import '../Button.css';

const CustomButton = ({ ButtonText  }) => {
  return (
    <>
      <div class="container">
        <a className="btn">
          {ButtonText}
        </a>
      </div>
    </>
  );
};

export default CustomButton;
