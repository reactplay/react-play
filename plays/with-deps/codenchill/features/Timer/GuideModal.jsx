import React, { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const GuideModal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  useEffect(() => {
    handleModalOpen();
  }, []);

  return (
    <div className="flex justify-end ">
      <Button className="relative" onClick={() => handleModalOpen()}>
        <BsInfoCircle className="text-white rounded-full w-[15px] h-[15px] absolute top-[15px]" />
      </Button>
      <Modal
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        open={openModal}
        onClose={() => handleModalClose()}
      >
        <Box className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] h-[80vh] overflow-y-auto sm:w-[50vw] sm:h-[70vh] bg-white/95 shadow-2xl p-4 rounded-lg">
          <Typography
            className="flex justify-between"
            component="h2"
            id="modal-modal-title"
            variant="h6"
          >
            <div>🎧 CodeNChill Guide</div>{' '}
            <MdClose className="cursor-pointer" onClick={() => handleModalClose()} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span>
              Dear <strong>Lo-Fi</strong> Lover 👋,
            </span>{' '}
            <br />
            <br />
            <span>
              Welcome to <strong>CodeNChill</strong> , the one-stop tool to take your{' '}
              <strong>productivity</strong> to the next level 🚀
            </span>
            <br />
            <br />
            <span>
              Here, you can easily <strong>play, pause , and shuffle</strong> your Lo-Fi tracks, and
              adjust the<strong> volume</strong> or <strong>mute </strong>the audio with just one
              click.
            </span>
            <br />
            <br />
            <span>
              You can set the timer ⏱️ in <strong>three fixed ways</strong>, or even set a{' '}
              <strong>custom timer</strong> to fit your specific needs.Once the timer is activated,
              a <strong>charming animation</strong> on timer dial and a message tailored to the
              selected mode will be displayed at the bottom of the screen. In addition, the title of
              your <strong>browser tab</strong> will exhibit the timer.
            </span>
            <br />
            <br />
            <span>
              If the timer is set for five minutes or less, you'll be in <strong>rest </strong>{' '}
              mode, otherwise, you'll be in <strong>work</strong> mode.
            </span>
            <br />
            <br />
            <span>
              The key <strong>highlight</strong> of this tool is that it will notify you with a{' '}
              <strong>voice alert</strong> 📢 once the timer is over, reminding you to "rest" 🥤 or
              "get back to work" 💻 based on your timer mode.
            </span>
            <br />
            <br />
            <span>
              Our focus is on enhancing user <strong>accessibility</strong>, thus we have provided
              several keyboard shortcut keys for your convenience.:
            </span>
            <br />
            <br />
            <span>
              <li>
                ➜ Press <strong>'s'</strong> to shuffel the tracks
              </li>
              <li>
                ➜ Press <strong>'Spacebar'</strong> to play/pause
              </li>
              <li>
                ➜ Press <strong>'Next arrow key'</strong> for next track
              </li>
              <li>
                ➜ Press <strong>'Back arroy key'</strong> for previouse track
              </li>
              <li>
                ➜ Press <strong>'m'</strong> to mute/unmute
              </li>
            </span>
            <br />
            <span>
              We have made every effort to ensure the reliability of this tool, however, if you
              experience music playback issues such as track freezing or failure to load, please try
              using the 's' key on your keyboard to shuffle the track.
            </span>
            <br />
            <br />
            <span>
              Thanks for reading this guide till the end. Let's <strong>code and chill</strong> now
              😉
            </span>
            <br />
            <br />
            <span>Happy hustling! 💪</span>
            <br />
            <br />
            <small>
              NOTE: You can open guide again by clicking on the <strong>"i"</strong> button
            </small>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default GuideModal;
