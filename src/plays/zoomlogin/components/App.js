import './App.css';
import CopyText from './CopyText';
import Footer from './Footer';

import zoomhelpaf from '../assets/zoom-help-1.png';
import ZoomPage from './Zoom/ZoomPage';

function App() {
  return (
    <>
      <div className=" sticky top-0 h-[120px] sm:h-20 bg-blue-900 text-white font-semibold text-3xl z-50 shadow-lg">
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
          <div className="text-base absolute top-3 right-[200px] p-2 px-4 bg-white border-red-500 text-red-600 border-4 font-bold rounded-md">
            <p>
              {' '}
              Chatbot: Click the "Help" button and the icon{' '}
              <img className="w-8 inline-block" src={zoomhelpaf} /> in the bottom right corner.
            </p>
            <p> Test by typing "password reset", and "easter egg dog pic" etc. </p>
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
