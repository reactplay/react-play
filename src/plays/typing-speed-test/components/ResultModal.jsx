import React from 'react';
import { Modal } from '@mui/material';
import { IoLogoTwitter } from 'react-icons/io5';
import '../styles.css';
import { getEvaluationText } from '../utils';

const ResultModal = ({ open, handleModalClose, results }) => {
  const { wpm, cpm, maxWPM, accuracy } = results;
  const evaluationText = getEvaluationText(wpm);

  const tweetIt = (msg) => {
    const URL = window.location.href;
    const VIA = 'reactplayIO';
    msg = msg ?? 'Learning ReactJS? Check out this awesome React Playlist!';
    const hashTags = ['javascript', 'devcommunity', '100daysofcode', 'react', 'reactplay'];
    const tags = encodeURIComponent(hashTags.join(','));

    return `https://twitter.com/intent/tweet?url=${URL}&text=${encodeURIComponent(
      msg
    )}&hashtags=${tags}&via=${VIA}`;
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={handleModalClose}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-content">
          <h1 className="text-[1.05rem] tracking-wide my-4 leading-9 text-start">
            <span className="text-green-400 font-bold">{evaluationText}</span> You type with the
            speed of{' '}
            <span className="bg-violet-100 text-violet-500 font-bold">{Math.round(wpm)} WPM</span> (
            {Math.round(cpm)} CPM). Your maximum speed was{' '}
            <span className="bg-violet-100 text-violet-500 font-bold">
              {Math.round(maxWPM)} WPM
            </span>{' '}
            and your accuracy was{' '}
            <span className="font-bold">{isNaN(accuracy) ? 0 : Math.round(accuracy)}%</span>. Keep
            practicing!
          </h1>
          <div className="flex gap-4 justify-center">
            <a
              className="mt-4 text-center bg-violet-500 px-5 py-[0.7rem] text-sm text-white rounded-[4px] font-medium flex gap-2 items-center"
              href={tweetIt(
                `Hey, check out I got typing speed of ${Math.round(wpm)} WPM. Find yours with`
              )}
              rel="noopener noreferrer"
              target="_blank"
            >
              Share
              <IoLogoTwitter className="icon" size={18} />
            </a>
            <button
              className="mt-4 text-center bg-gray-400 px-5 py-[0.7rem] text-sm text-white rounded-[4px] font-medium"
              onClick={handleModalClose}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;
