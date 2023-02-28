import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoReddit } from 'react-icons/io5';

const SocialShare = ({ showTwitter, showLinkedin, showFB, showReddit, msg }) => {
  const URL = window.location.href;
  const VIA = 'reactplayIO';

  const tweetIt = () => {
    msg = msg ?? 'Learning ReactJS? Check out this awesome React Playlist!';
    const hashTags = ['javascript', 'devcommunity', '100daysofcode', 'react', 'reactplay'];
    const tags = encodeURIComponent(hashTags.join(','));

    return `https://twitter.com/intent/tweet?url=${URL}&text=${encodeURIComponent(
      msg
    )}&hashtags=${tags}&via=${VIA}`;
  };

  const postOnFB = () => {
    return `https://www.facebook.com/sharer.php?u=${URL}`;
  };

  const postOnLinkedIn = () => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${URL}`;
  };

  const postOnReddit = () => {
    const title = 'Learning ReactJS? Check out this awesome React Playlist!';

    return `http://www.reddit.com/submit?url=${URL}&title=${encodeURIComponent(title)}`;
  };

  return (
    <div className="social-share">
      <div className="social-share-buttons">
        {showFB && (
          <a
            className="social-share-button"
            href={postOnFB()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoFacebook className="icon" size={48} />
          </a>
        )}
        {showTwitter && (
          <a
            className="social-share-button"
            href={tweetIt()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoTwitter className="icon" size={48} />
          </a>
        )}
        {showLinkedin && (
          <a
            className="social-share-button"
            href={postOnLinkedIn()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoLinkedin className="icon" size={48} />
          </a>
        )}
        {showReddit && (
          <a
            className="social-share-button"
            href={postOnReddit()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IoLogoReddit className="icon" size={48} />
          </a>
        )}
      </div>
    </div>
  );
};

export default SocialShare;
