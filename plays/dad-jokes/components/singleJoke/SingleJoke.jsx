import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import {
  BsEmojiAngry,
  BsEmojiSmile,
  BsEmojiLaughing,
  BsEmojiNeutral,
  BsEmojiSmileUpsideDown,
  BsEmojiSunglasses,
  BsEmojiHeartEyes
} from 'react-icons/bs';
import './SingleJoke.css';

// Emoji class given to all the emojis
let emojiClass = 'singlejoke-emoji';

const SingleJoke = ({ darktheme, downvote, jokeText, upvote, vote }) => {
  // Emoji state changing on the basis of votes
  const getColor = () => {
    if (vote >= 15) {
      return '#4caf50';
    } else if (vote >= 12) {
      return '#8bc34a';
    } else if (vote >= 9) {
      return '#cddc39';
    } else if (vote >= 6) {
      return '#ffeb3b';
    } else if (vote >= 3) {
      return '#ffc107';
    } else if (vote >= 0) {
      return '#ff9800';
    } else {
      return '#f44336';
    }
  };

  return (
    <>
      {/* -------------------------------------------Single Joke Container------------------------------------------------------*/}
      <div className={darktheme ? 'singlejoke dark' : 'singlejoke'}>
        {/* -------------------------------------------Single Joke Vote Buttons------------------------------------------------------*/}
        <div className="singlejoke-buttons">
          {/* -------------------------------------------Upvote Button------------------------------------------------------*/}
          <div>
            <button onClick={upvote}>
              <AiOutlineArrowUp className="singlejoke-buttons-upvote" />
            </button>
          </div>
          {/* -------------------------------------------Vote Text------------------------------------------------------*/}
          <div className="singlejoke-buttons-votes">
            <p style={{ borderColor: getColor() }}>{vote}</p>
          </div>
          {/* -------------------------------------------Downvote Button------------------------------------------------------*/}
          <div>
            <button onClick={downvote}>
              <AiOutlineArrowDown className="singlejoke-buttons-downvote" />
            </button>
          </div>
        </div>
        {/* -------------------------------------------Single Joke Text------------------------------------------------------*/}
        <div className="singlejoke-text">
          <p>{jokeText}</p>
        </div>
        {/* -------------------------------------------Single Joke Emoji------------------------------------------------------*/}
        <div>
          {vote < 0 ? <BsEmojiAngry className={emojiClass} /> : ''}
          {vote >= 0 && vote < 3 ? <BsEmojiNeutral className={emojiClass} /> : ''}
          {vote >= 3 && vote < 6 ? <BsEmojiSmile className={emojiClass} /> : ''}
          {vote >= 6 && vote < 9 ? <BsEmojiSmileUpsideDown className={emojiClass} /> : ''}
          {vote >= 9 && vote < 12 ? <BsEmojiSunglasses className={emojiClass} /> : ''}
          {vote >= 12 && vote < 15 ? <BsEmojiHeartEyes className={emojiClass} /> : ''}
          {vote >= 15 ? <BsEmojiLaughing className={emojiClass} /> : ''}
        </div>
      </div>
    </>
  );
};

export default SingleJoke;
