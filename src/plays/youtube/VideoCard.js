import { useDispatch } from 'react-redux';
import { toggleWatchPage, setVideoId } from './utils/appSlice';
import checked from './assets/verified-badge.png';

const VideoCard = ({ videoData }) => {
  const dispatch = useDispatch();

  const switchToWatchPage = () => {
    dispatch(setVideoId(videoData));
    dispatch(toggleWatchPage());
  };

  return (
    <div className="videoCard" onClick={() => switchToWatchPage()}>
      <img
        alt="video-thimbnail"
        className="thumbnail"
        src={videoData?.snippet?.thumbnails?.medium?.url}
      />
      <div className="video-title">{videoData?.snippet?.title}</div>
      <div className="channel-name">{videoData?.snippet?.channelTitle}</div>
      <img alt="verified" className="checked-card" src={checked} />
    </div>
  );
};

export default VideoCard;
