import { Modal } from '@mui/material';
import { IoLogoTwitter } from 'react-icons/io5';
import '../styles.css';
import { getEvaluationText } from '../utils';

const ResultModal = ({ open, handleModalClose, stats }) => {
  const { wpm, cpm, accuracy } = stats;
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

  return (
    <Modal open={open} onClose={handleModalClose}>
      <div className="typing__speed__test__result__modal ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-[1.05rem] tracking-wide my-4 leading-9">
            {evaluationText} You type with the speed of{' '}
            <span className="bg-violet-100 text-violet-500 font-bold">{wpm} WPM</span> ({cpm} CPM).
            Your accuracy was <span className="font-bold">{isNaN(accuracy) ? 0 : accuracy}%</span>{' '}
            Keep practicing!
          </h1>
          <div className="flex gap-4">
            <a
              className="mt-4 text-center bg-violet-500 px-5 py-[0.7rem] text-sm text-white rounded-[4px] font-medium flex gap-2 items-center"
              href={tweetIt(`Hey checkout I got typing speed of  ${wpm} WPM. Find yours with`)}
            >
              {' '}
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
