import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoShareOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { RiTwitterXLine } from 'react-icons/ri';
import { LiaLinkedinIn } from 'react-icons/lia';
import { PiCopySimpleDuotone, PiCopySimpleFill } from 'react-icons/pi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 488,
  minHeight: 480,
  maxHeight: '85%',
  aspectRatio: 0.71,
  bgcolor: 'white',
  border: '1px solid #000',
  borderRadius: '12px',
  boxShadow: 24,
  overflow: 'hidden'
};

function PlayShare({ cover, link }) {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeHandler = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  const linkOnClick = async (socialMedia) => {
    const shareUrl = window.location.origin + link;

    switch (socialMedia) {
      case 'x':
        window
          .open(
            `https://x.com/intent/post?url=${shareUrl}&text=Check out my new React project built with learning from @ReactPlayIO!`,
            '_blank'
          )
          .focus();

        break;

      case 'linkedin':
        window
          .open(
            `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${shareUrl}&text=Check out my new React project built with learning from @ReactPlay!`,
            '_blank'
          )
          .focus();

        break;

      case 'copy':
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);

        setTimeout(() => setCopied(false), 3000);

        break;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} onClick={(e) => e.preventDefault()}>
      <Modal aria-labelledby="modal-modal-title" open={showModal} onClose={closeHandler}>
        <Box sx={style}>
          <div className="w-full h-1/2 bg-[#f3f3f3] rounded-2xl flex !justify-center items-center">
            <div className="w-5/6 aspect-video rounded-2xl shadow-2xl overflow-hidden">
              <img alt="" className="h-full w-full object-cover" src={cover} />
            </div>
            <div
              className="absolute flex items-center !justify-center cursor-pointer h-8 w-8 top-3 right-3 duration-300 hover:shadow-xl rounded-full"
              onClick={closeHandler}
            >
              <RxCross2 />
            </div>
          </div>
          <div className="w-full h-1/2">
            <h3 className="w-full h-1/2 font-medium text-base sm:text-xl px-5 text-center flex items-center !justify-center">
              Let others know through your social platforms
            </h3>
            <div className="w-full h-1/2 flex items-start !justify-center">
              <div
                className="h-16 w-16 sm:h-20 sm:w-20 flex !mx-3  items-center text-black !justify-center bg-[#00000021] hover:bg-[#00000035] duration-300 cursor-pointer rounded-full"
                onClick={() => linkOnClick('x')}
              >
                <RiTwitterXLine size={26} />
              </div>
              <div
                className="h-16 w-16 sm:h-20 sm:w-20 flex !mx-3 items-center text-[#1d9bf2] !justify-center bg-[#1DA1F230] hover:bg-[#1DA1F25C] duration-300 cursor-pointer rounded-full"
                onClick={() => linkOnClick('linkedin')}
              >
                <LiaLinkedinIn size={32} />
              </div>
              <div
                className="h-16 w-16 sm:h-20 sm:w-20 flex !mx-3 items-center text-[#b974e1] !justify-center bg-[#b974e130] hover:bg-[#b974e15c] duration-300 cursor-pointer rounded-full"
                onClick={async () => await linkOnClick('copy')}
              >
                {copied ? <PiCopySimpleFill size={32} /> : <PiCopySimpleDuotone size={32} />}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <IoShareOutline className="mx-2" />
      </button>
    </div>
  );
}

export default PlayShare;
