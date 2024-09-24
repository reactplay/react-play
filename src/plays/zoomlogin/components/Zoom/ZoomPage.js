import { useEffect, useState } from 'react';

import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../chatbot/ActionProvider';
import '../chatbot/ChatbotOverride.css';
import MessageParser from '../chatbot/MessageParser';
import config from '../chatbot/config';
import ZoomHeader from './ZoomHeader';
import ZoomSignin from './ZoomSignin';

import fileUpload from '../../assets/chatbot/document-svgrepo-com.svg';
import emojiIcon from '../../assets/chatbot/smile-circle-svgrepo-com.svg';
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

  useEffect(() => {
    const inputElement = document.querySelector('.react-chatbot-kit-chat-input');

    if (inputElement) {
      inputElement.placeholder = 'Write a message (e.g. reset password, easter egg dog 🐶 )';
      inputElement.blur();
    }

    const formElement = document.querySelector('.react-chatbot-kit-chat-input-form');

    if (formElement) {
      const iconsContainer = document.createElement('div');
      iconsContainer.style.display = 'flex';
      iconsContainer.style.alignItems = 'center';

      const fileButton = document.createElement('button');
      fileButton.style.background = 'none';
      fileButton.style.border = 'none';
      fileButton.style.cursor = 'not-allowed';
      fileButton.disabled = true;

      const fileIconElement = document.createElement('img');
      fileIconElement.src = `${fileUpload}`;
      fileIconElement.alt = 'file upload';
      fileIconElement.style.marginLeft = '14px';
      fileIconElement.style.marginTop = '14px';
      fileIconElement.style.width = '22px';
      fileIconElement.style.padding = '3px';

      fileIconElement.addEventListener('mouseover', () => {
        fileIconElement.style.backgroundColor = '#52528017';
        fileIconElement.style.borderRadius = '2px';
      });

      fileIconElement.addEventListener('mouseout', () => {
        fileIconElement.style.backgroundColor = '';
        fileIconElement.style.border = 'none';
      });

      fileButton.appendChild(fileIconElement);
      iconsContainer.appendChild(fileButton);

      const emojiButton = document.createElement('button');
      emojiButton.style.background = 'none';
      emojiButton.style.border = 'none';
      emojiButton.style.cursor = 'not-allowed';
      emojiButton.style.width = '22px';
      emojiButton.disabled = true;

      const emojiIconElement = document.createElement('img');
      emojiIconElement.src = `${emojiIcon}`;
      emojiIconElement.alt = 'emoji icon';
      emojiIconElement.style.marginLeft = '2px';
      emojiIconElement.style.marginTop = '14px';
      emojiIconElement.style.padding = '3px';

      emojiIconElement.addEventListener('mouseover', () => {
        emojiIconElement.style.backgroundColor = '#52528017';
        emojiIconElement.style.borderRadius = '2px';
      });

      emojiIconElement.addEventListener('mouseout', () => {
        emojiIconElement.style.backgroundColor = '';
        emojiIconElement.style.border = 'none';
      });

      emojiButton.appendChild(emojiIconElement);
      iconsContainer.appendChild(emojiButton);

      formElement.appendChild(iconsContainer);

      return () => {
        if (iconsContainer) {
          formElement.removeChild(iconsContainer);
        }
      };
    }
  }, []);

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
