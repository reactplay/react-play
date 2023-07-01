import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import data from '../data';
const CardContainer = ({
  gradientColor,
  quote,
  AspectRatio,
  cardColor,
  setDomImg,
  domImg,
  backupData,
  apiStatus
}) => {
  const downloadImgRef = useRef();
  const targetEl = downloadImgRef.current;

  // Updating the card container on every customization
  useEffect(() => {
    setDomImg(targetEl);
  }, [domImg]);

  return (
    <section className="w-full  flex items-center justify-center h-full mb-4 sm:mb-0">
      <div
        className={`my-1 mt-2 p-12 ${
          AspectRatio === 'Square'
            ? 'w-[350] sm:w-[650px] h-[350px] sm:h-[650px]'
            : 'w-[350px] h-[650px]'
        }  flex items-center justify-center shadow-2xl`}
        ref={downloadImgRef}
        style={{
          background: `linear-gradient(${gradientColor[0].gradient_color1}, ${gradientColor[0].gradient_color2})`
        }}
      >
        <div
          className={`  ${
            AspectRatio === 'Square' ? 'p-8' : 'px-4 py-14'
          }  overflow-hidden mx-auto ${
            cardColor === 'Dark' ? 'bg-black text-white' : 'bg-white text-black'
          } bg-opacity-75  rounded-xl flex flex-col items-center shadow-2xl`}
        >
          <FaQuoteLeft className="mb-8" size={28} />{' '}
          <p className="text-center text-sm sm:text-base">
            {apiStatus ? (quote.content ? quote.content : '...loading') : backupData[0].quote}
          </p>
          <p className="text-center  text-sm sm:text-base font-semibold mt-4">
            {' '}
            - {apiStatus ? (quote.author ? quote.author : '...loading') : backupData[0].author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
