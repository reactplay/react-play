import React, { useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { BsAspectRatio, BsDownload } from 'react-icons/bs';
import { TbRectangleVertical, TbSquare } from 'react-icons/tb';
import { VscSymbolColor } from 'react-icons/vsc';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import { backupQuotes } from '../data';
const SideBarOperation = ({
  regenerate,
  setRegenerate,
  setAspectRatio,
  domImg,
  AspectRatio,
  cardColor,
  gradients,
  setCardColor,
  setGradientColor,
  gradientColor,
  setBackupData,
  apiStatus
}) => {
  const [aspectRatioVisibility, setAspectRatioVisibility] = useState(false);
  const [colorBoxVisibility, setColorBoxVisibility] = useState(false);
  const [regenerateAnimation, setRegenerateAnimation] = useState(false);
  const [backgroundColorMobileActive, setBackgroundColorMobileActive] = useState(false);
  // Passing the selected aspect ration to the state
  const handleAspectRatioSelection = (aspectRationName) => {
    setAspectRatio(aspectRationName);
  };

  // Handling the visibliliy of aspect ration options
  const handleAspectRatioVisibility = () => {
    setAspectRatioVisibility(!aspectRatioVisibility);
  };

  // Download image Logic
  const downloadImageFunction = (style) => {
    const param = {
      quality: 1,
      width: domImg.clientWidth * 5,
      height: domImg.clientHeight * 5,
      style
    };

    domtoimage
      .toBlob(domImg, param)
      .then((dataUrl) => {
        saveAs(dataUrl, 'Quote.png');
      })
      .catch((err) => console.error(err));
  };

  const handleDownloadImage = () => {
    if (AspectRatio === 'Square') {
      let style = {
        transform: 'scale(5)',
        transformOrigin: 'top left',
        left: '0px',
        height: '650px',
        width: '680px'
      };
      downloadImageFunction(style);
    } else {
      let style = {
        transform: 'scale(5)',
        transformOrigin: 'top left',
        left: '0px',
        height: '650px',
        width: '350px'
      };
      downloadImageFunction(style);
    }
  };

  // Quote regeneration logic

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleQuoteRegeneration = () => {
    if (apiStatus) {
      setRegenerate(!regenerate);
    }
    const randomId = randomInteger(1, backupQuotes.length);
    const randomQuoteData = backupQuotes.filter((quoteData) => quoteData.id === randomId);
    setBackupData(randomQuoteData);
    setRegenerateAnimation(!regenerateAnimation);
  };

  // Design tools in Bottom bar

  // 1. Background Color feature

  const HandleColorBoxVisibility = () => {
    setColorBoxVisibility(!colorBoxVisibility);
    setBackgroundColorMobileActive(!backgroundColorMobileActive);
  };

  const handleGradientSelection = (selectedGradientColorId) => {
    const selectedGradinet = gradients.filter(
      (gradientColorItem) => gradientColorItem.id === selectedGradientColorId
    );

    setGradientColor(selectedGradinet);
  };

  // 2. Card Color Feature

  const handleCardColor = (e) => {
    if (cardColor === 'Light') {
      setCardColor('Dark');
    } else {
      setCardColor('Light');
    }
  };

  // 3. Download Image

  const handleDownloadImageMobile = () => {
    if (AspectRatio === 'Square') {
      let style = {
        transform: 'scale(5)',
        transformOrigin: 'top left',
        left: '0px',
        height: '350px',
        width: '380px'
      };
      downloadImageFunction(style);
    } else {
      let style = {
        transform: 'scale(5)',
        transformOrigin: 'top left',
        left: '0px',
        height: '650px',
        width: '350px'
      };
      downloadImageFunction(style);
    }
  };

  return (
    <section className=" bg-white relative right-0 left-0 bottom-0 sm:right-4  shadow-xl p-4 flex flex-row sm:flex-col items-center gap-6 z-50 w-full sm:w-32 h-[15vh] sm:h-[650px] rounded-lg  ">
      <div className="flex flex-row sm:flex-col items-center justify-between w-full relative">
        {/* Background Color Button Container */}
        <div className="flex flex-col justify-center items-center block sm:hidden">
          <button
            className={`mt-2 sm:mt-4 flex items-center justify-center rounded-lg px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] ${
              backgroundColorMobileActive ? 'bg-black text-white' : 'bg-white text-black'
            } `}
            onClick={() => HandleColorBoxVisibility()}
          >
            <VscSymbolColor />
          </button>
          <p className="mt-4 text-center text-xs sm:text-base ">Color</p>
        </div>
        {/* Background Color selection Button Container */}
        <div
          className={`p-4 absolute -left-2 bottom-[7rem] sm:right-32 sm:top-28 bg-white rounded-lg block sm:hidden ${
            colorBoxVisibility ? 'block' : 'hidden'
          }`}
        >
          {gradients.map((gradient) => (
            <div
              className={`bg-1  my-1 mt-2 rounded-full cursor-pointer w-[35px] h-[35px] ${
                gradient.id === gradientColor[0].id ? ' border-4 border-slate-500' : ''
              }`}
              key={gradient.id}
              style={{
                background: `linear-gradient(${gradient.gradient_color1}, ${gradient.gradient_color2})`
              }}
              onClick={() => handleGradientSelection(gradient.id)}
            />
          ))}
        </div>

        {/* Card Color Button Container */}
        <div className="flex flex-col justify-center items-center block sm:hidden">
          <button
            className="mt-2 sm:mt-4 flex items-center justify-center rounded-lg bg-white px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
            onClick={() => handleCardColor()}
          >
            {cardColor === 'Light' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>
          <p className="mt-4 text-center text-xs sm:text-base ">Mode</p>
        </div>

        {/* Regenerate Quote Button Container */}
        <div className="flex flex-col justify-center items-center">
          <button
            className="mt-2 flex items-center justify-center rounded-lg bg-white px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
            onClick={() => handleQuoteRegeneration()}
          >
            <FiRepeat
              className={`transition-transform ease-in duration-300 ${
                regenerate || regenerateAnimation ? 'rotate-90' : '-rotate-90'
              }`}
            />
          </button>
          <p className="mt-4 text-xs sm:text-base"> Quote</p>
        </div>

        {/* Aspect Ratio Button Container */}
        <div className="flex flex-col justify-center items-center">
          <button
            className={`mt-2 sm:mt-6 transition-opacity flex items-center justify-center rounded-lg  px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)] ${
              aspectRatioVisibility ? 'bg-black text-white' : 'bg-white text-black'
            } `}
            onClick={() => handleAspectRatioVisibility()}
          >
            <BsAspectRatio />
          </button>
          <p className="mt-4 text-center text-xs sm:text-base"> Ratio</p>
        </div>

        {/* Aspect Ratio selection Button Container */}
        <div
          className={`p-3 sm:p-4 absolute right-[3rem] bottom-[7rem] sm:right-[5.5rem] sm:top-24 bg-white sm:bg-transparent rounded-lg  ${
            aspectRatioVisibility ? 'block' : 'hidden'
          }`}
        >
          <div
            className={`flex flex-row justify-center items-center p-2 shadow-md mb-4 rounded-lg cursor-pointer ${
              AspectRatio === 'Rectangle' ? 'bg-black text-white' : 'bg-white text-black'
            } `}
            onClick={() => handleAspectRatioSelection('Rectangle')}
          >
            <TbRectangleVertical />
            <p className="text-xs sm:text-base">(9:16)</p>
          </div>
          <div
            className={`flex flex-row justify-center items-center p-2 shadow-md rounded-lg cursor-pointer ${
              AspectRatio === 'Square' ? 'bg-black text-white' : 'bg-white text-black'
            } `}
            onClick={() => handleAspectRatioSelection('Square')}
          >
            <TbSquare /> <p className="text-xs sm:text-base">(1:1)</p>
          </div>
        </div>

        {/* MOBILE Download Button Container */}
        <div className="flex flex-col justify-center items-center  block sm:hidden ">
          <button
            className="mt-2 sm:mt-4 flex items-center justify-center rounded-lg bg-white px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
            onClick={() => handleDownloadImageMobile()}
          >
            <BsDownload />
          </button>
          <p className="mt-4 text-center text-xs sm:text-base ">Download</p>
        </div>

        {/* DESKTOP  Download Button Container */}
        <div className="flex flex-col justify-center items-center hidden sm:flex">
          <button
            className="mt-4  flex items-center justify-center rounded-lg bg-white px-4 py-3 shadow-[-2px_-2px_10px_rgba(255,255,255,1),3px_3px_10px_rgba(0,0,0,0.2)] active:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.7),inset_3px_3px_5px_rgba(0,0,0,0.1)]"
            onClick={() => handleDownloadImage()}
          >
            <BsDownload />
          </button>
          <p className="mt-4 text-center text-xs sm:text-base ">Download</p>
        </div>
      </div>
    </section>
  );
};

export default SideBarOperation;
