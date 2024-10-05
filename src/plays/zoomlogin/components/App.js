import { useState } from 'react';
import CopyText from './CopyText';
import Footer from './Footer';

import React, { useRef } from 'react';
import zoomhelpaf from '../assets/zoom-help-1.png';
import ZoomPage from './Zoom/ZoomPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // dialogRef.current.close();
  };

  return (
    <>
      {isModalOpen && (
        <div className="bg-gray-500 fixed inset-0 z-30 bg-opacity-50 flex items-center justify-center">
          <div className="absolute w-[240px] sm:w-[300px] sm:top-[400px] z-40 p-6 bg-white rounded-md text-wrap">
            <p className="text-lg text-center font-bold pb-2">Test Guide </p>
            <hr /> <br />
            <div className="mb-2">
              <span className="font-bold">Login form: </span>
              <span className="text-base">
                Copy and paste the credentials provided in the header.
              </span>
            </div>
            <div>
              <span className="font-bold">Chatbot:</span>
              <span className="text-base">
                {' '}
                Click the{' '}
                <span className="border-red-500 border-2 rounded-full py-1 px-1"> Help</span> button
                and the icon will appear
              </span>
              <img className="w-7 inline-block" src={zoomhelpaf} /> <br />
              <span className="text-base">
                Test by typing <i>"password reset"</i>or <i>"easter egg dog pic"</i> etc. <br />
              </span>
            </div>
            <div className="grid items-center mt-4">
              <button
                aria-label="close modal"
                className="font-semibold rounded-lg bg-[#0956b5] text-white px-2 py-1 hover:bg-[#07428f]"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="sticky top-[-1rem] h-[120px] sm:h-20 bg-blue-900 text-white font-semibold text-3xl z-1 shadow-lg">
        <div className="flex items-center justify-between py-3 px-3 sm:px-5 h-[120px] sm:h-20">
          <div className="flex justify-center ml-4">
            <p className="font-mono">
              Clone Coding
              <p className="text-sm text-gray-300">Login form pages</p>
            </p>
          </div>
          <div>
            <div className="relative">
              <p className="text-sm text-gray-300">Test credentials</p>
              <p className="text-xs mr-10">test@example.com</p>
              <div className="absolute top-1 right-0 text-yellow-400">
                <CopyText copyText="test@example.com" />
              </div>
              <p className="text-xs">1234abc!</p>
              <div className="absolute bottom-[-2px] right-14 text-yellow-400">
                <CopyText copyText="1234abc!" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ZoomPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
