import React from 'react';
import './styles.css';
import PlayHeader from 'common/playlists/PlayHeader';
import TextForm from './components/TextForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// WARNING: Do not change the entry componenet name
function SmartConverter(props) {
  const showAlert = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 5000,
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
      <div className="play-details">
        <PlayHeader play={props} />
        <ToastContainer
          closeOnClick
          draggable
          pauseOnFocusLoss
          pauseOnHover
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          position="top-center"
          rtl={false}
          theme="light"
        />
        <div className="Smart-converter-Main-container">
          <TextForm
            heading="Try Smart Converter - word counter, character counter, remove extra spaces"
            showAlert={showAlert}
          />
        </div>
      </div>
    </>
  );
}

export default SmartConverter;
