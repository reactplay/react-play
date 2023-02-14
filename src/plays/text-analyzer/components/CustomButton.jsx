import React from 'react';
import '../Button.css';

const CustomButton = ({ ButtonText  }) => {
  return (
    <>
      <div class="container">
        <a href="#" class="btn">
          {ButtonText}
        </a>
      </div>
    </>
  );
};

export default CustomButton;
