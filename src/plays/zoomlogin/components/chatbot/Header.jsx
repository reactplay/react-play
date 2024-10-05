import cancelCircle from '../../assets/cancelCircle.svg';
import downArrow from '../../assets/down-arrow.svg';
import downloadArrow from '../../assets/downloadArrow.svg';
import microPhone from '../../assets/microphone.svg';
import zoomsupport from '../../assets/zoomsupport.png';

const Header = ({ isChatbotHeaderClose, handleChatbotModal, toggleHeaderActionMenuModal }) => {
  return (
    <div className="relative w-[380px] sm:w-[428px] h-[96px] bg-white rounded-t-3xl">
      {isChatbotHeaderClose && (
        <div className="absolute top-10 rounded-lg right-3 border-2 border-gray text-[13px] py-2 bg-white w-[222px] z-10">
          <div className="flex items-center h-[44px] py-2 gap-4 hover:bg-[#0e72ed] cursor-not-allowed">
            <div className="w-4 h-4 ml-3 ">
              <img alt="microphone" src={microPhone} />
            </div>
            <div title="NOT IMPLEMENTED">Mute Chat</div>
          </div>
          <div className="flex items-center h-[44px] py-2 gap-4 hover:bg-[#0e72ed] cursor-not-allowed ">
            <div className="w-4 h-4 ml-3 cursor-not-allowed">
              <img alt="download arrow" src={downloadArrow} />
            </div>
            <div className="cursor-not-allowed" title="NOT IMPLEMENTED">
              Download Transcript
            </div>
          </div>
          <div
            aria-label="end chat button"
            className="flex items-center cursor-pointer h-[44px] py-2 gap-4 hover:bg-[#0e72ed]"
            role="button"
            onClick={handleChatbotModal}
          >
            <div className="w-4 h-4 ml-3">
              <img alt="cancel" src={cancelCircle} />
            </div>
            <div>End Chat</div>
          </div>
        </div>
      )}
      <div className="flex flex-col h-[96px] p-3  border-b border-gray">
        <div className="flex justify-end">
          <div className="flex mx-2 gap-3">
            <button onClick={handleChatbotModal}>
              <img
                alt="close"
                className="w-4 h-4 rounded-md hover:bg-gray-200 mt-1"
                src={downArrow}
              />
            </button>
            <button onClick={toggleHeaderActionMenuModal}>
              <span className="bold text-gray-500 font-extrabold px-1 rounded-md hover:bg-gray-200 hover:cursor-pointer">
                ···
              </span>
            </button>
          </div>
        </div>
        <div className="flex ">
          <img alt="zoomsupport" className="w-11 h-11 mr-7" src={zoomsupport} />
          <div className="flex flex-col" style={{ fontSize: '14px' }}>
            <p className="font-bold">Zoom Support</p>
            <p>Powered by Zoom Virtual Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
