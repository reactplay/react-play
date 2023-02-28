import React from 'react';
import rgbToHex from './utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;

  const showAlert = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    });
  };

  return (
    <>
      <article
        className={`color-palettes-generator-color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          navigator.clipboard.writeText(hexValue);
          showAlert(`${hexValue} Copied!`);
        }}
      >
        {alert && (
          <ToastContainer
            closeOnClick
            draggable
            pauseOnFocusLoss
            pauseOnHover
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            position="top-center"
            rtl={false}
            theme="light"
          />
        )}
        <p className="color-palettes-generator-percent-value">{weight}%</p>
        <p className="color-palettes-generator-color-value">{hexValue}</p>
      </article>
    </>
  );
};

export default SingleColor;
