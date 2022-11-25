import React from 'react';
import { ToastContainer } from 'react-toastify';

function Notification() {
  return (
    <ToastContainer
      closeOnClick
      draggable
      pauseOnFocusLoss
      pauseOnHover
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      position="top-right"
      rtl={false}
      theme="light"
    />
  );
}

export default Notification;
