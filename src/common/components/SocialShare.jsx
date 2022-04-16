
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoReddit } from 'react-icons/io5';

const SocialShare = () => {

  const URL = window.location.href;
  const VIA = 'reactplayIO';
  
  const tweetIt = () => {
    const msg = 'Learning ReactJS? Check out this awesome React Playlist!';
    const hashTags = ['javascript', 'devcommunity', '100daysofcode', 'react', 'reactplay'];
    const tags = encodeURIComponent(hashTags.join(','));
    return `https://twitter.com/intent/tweet?url=${URL}&text=${encodeURIComponent(msg)}&hashtags=${tags}&via=${VIA}`;
  }

  const postOnFB = () => {
    return `https://www.facebook.com/sharer.php?u=${URL}`
  }

  const postOnLinkedIn = () => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${URL}`;
  }

  const postOnReddit = () => {
    const title = 'Learning ReactJS? Check out this awesome React Playlist!';
    return `http://www.reddit.com/submit?url=${URL}&title=${encodeURIComponent(title)}`;
  }

  return(
    <div className="social-share">
      <div className="social-share-buttons">
        <a href={ postOnFB() } target="_blank" rel="noopener noreferrer" className="social-share-button">
          <IoLogoFacebook size={48} className="icon" />
        </a>
        <a href={ tweetIt() } target="_blank" rel="noopener noreferrer" className="social-share-button">
          <IoLogoTwitter  size={48} className="icon" />
        </a>
        <a href={ postOnLinkedIn() } target="_blank" rel="noopener noreferrer" className="social-share-button">
          <IoLogoLinkedin  size={48} className="icon" />
        </a>
        <a href={ postOnReddit() } target="_blank" rel="noopener noreferrer" className="social-share-button">
          <IoLogoReddit size={48} className="icon"  />
        </a>
      </div>
    </div>  
  )
};

export default SocialShare;