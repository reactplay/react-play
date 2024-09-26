import { useState } from 'react';

import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../chatbot/ActionProvider';
import '../chatbot/ChatbotOverride.css';
import MessageParser from '../chatbot/MessageParser';
import config from '../chatbot/config';
import ZoomHeader from './ZoomHeader';
import ZoomSignin from './ZoomSignin';

import zoomhelpbf from '../../assets/zoom-help-1.png';
import zoomhelpaf from '../../assets/zoom-help-2.png';
import zoomImg from '../../assets/zoom-img.png';
import zoomAdImg from '../../assets/zoomAd.png';

function ZoomPage() {
  const [isHelp, setIsHelp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isChatbotClose, setIsChatbotClose] = useState(true);
  const [isChatbotHeaderClose, setIsChatbotHeaderClose] = useState(true);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleChatbotModal = () => {
    setIsChatbotClose(!isChatbotClose);
    setIsChatbotHeaderClose(false);
    setIsHelp(false);
  };

  const toggleHeaderActionMenuModal = () => {
    setIsChatbotHeaderClose(!isChatbotHeaderClose);
  };

  const validateInput = (message) => {
    if (!message.trim()) {
      return false;
    }

    return true;
  };

  return (
    <>
      <ZoomHeader />
      <div className="flex relative w-full mx-auto sm:h-[900px] h-[1000px]">
        {/* desktop img */}
        <div className="bg-[#f7f9fa] lg:w-3/5 lg:p-[6rem]">
          <div className="hidden lg:pt-[160px] lg:inline-block">
            <img alt="zoomimg" className="w-[400px] min-w-[360px]" src={zoomImg} />
          </div>
          <div className="absolute top-16 left-[90px] hidden 2xl:pt-[160px] 2xl:inline-block z-10">
            <a
              href="https://www.zoom.com/en/blog/zoom-docs-guide/?itm_source=signinpage&itm_medium=imm-en&itm_campaign=FY25_ZoomDocs_Aug5"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="zoomAdimg" className="w-[555px] min-w-[360px]" src={zoomAdImg} />
            </a>
          </div>
        </div>
        <div className="relative flex flex-col items-center bg-white pt-20 px-16 py-5 w-full sm:h-[900px] h-[1000px]">
          <div className="flex justify-center absolute w-full bg-[#f7f9fa] top-0 lg:hidden">
            <img alt="zoomimg" className="w-[205px]" src={zoomImg} />
          </div>
          <div className="absolute top-[200px] lg:top-20 h-[536px]">
            <div className="">
              <ZoomSignin help={isHelp} helpHandle={() => setIsHelp(true)} />
            </div>
            <div className={`fixed right-5 bottom-5 rounded-lg ${isChatbotClose && 'hidden'}`}>
              <Chatbot
                actionProvider={ActionProvider}
                config={config({
                  isChatbotHeaderClose,
                  handleChatbotModal,
                  toggleHeaderActionMenuModal
                })}
                messageParser={MessageParser}
                validator={validateInput}
              />
            </div>
          </div>
        </div>
        <button
          aria-label="help button"
          className="fixed bottom-10 right-10 z-10"
          onClick={handleChatbotModal}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {isHelp && <img alt="help" className="b-2" src={isHovered ? zoomhelpaf : zoomhelpbf} />}
        </button>
      </div>
    </>
  );
}

export default ZoomPage;
