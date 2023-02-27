import { useSelector, useDispatch } from 'react-redux';
import { toggleWatchPage } from './utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_DATA_API } from './constant';
import checked from './assets/verified-badge.png';
import backArrow from './assets/long-arrow-left.png';

const WatchPage = () => {
  const [channelData, setChannelData] = useState(null);
  const videoData = useSelector((store) => store.app.videoId);
  const dispatch = useDispatch();

  const urlify = (description) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    return description.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    });
  };
  let videoDescription = urlify(videoData?.snippet?.description);

  useEffect(() => {
    getChannelData();
  }, []);

  const getChannelData = async () => {
    let data = await fetch(YOUTUBE_VIDEO_DATA_API + '&id=' + videoData?.snippet?.channelId);
    let json = await data.json();
    setChannelData(json.items[0]);
  };

  const goToHomePage = () => {
    dispatch(toggleWatchPage());
  };

  if (!channelData) return <h1>Loading....</h1>;

  return (
    <div className="watch-page">
      <div className="watch-video">
        <div className="back-arrow">
          <img
            alt="back arrow"
            className="back-arrow-img"
            src={backArrow}
            onClick={() => goToHomePage()}
          />
          Back
        </div>
        <div className="watch-video-container">
          <iframe
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            height="337.5"
            src={'https://www.youtube.com/embed/' + videoData?.id}
            title="YouTube video player"
            width="600"
          />
          <div className="wv-title">{videoData?.snippet?.title}</div>
          <div className="acton-btns d-flex justify-between">
            <div className="wv-left d-flex align-center">
              <img
                alt="channel logo"
                className="channel-logo"
                src={channelData?.snippet?.thumbnails?.high?.url}
              />
              <span className="wv-channel-name">{videoData?.snippet?.channelTitle}</span>
              <img alt="verified" className="verified-logo" src={checked} />
              <button className="subs-btn">Subscribe</button>
            </div>
            <div className="wv-right">
              <button className="like-dislike" />
              <button className="share" />
              <button className="more" />
            </div>
          </div>
          <div className="video-description">
            <div dangerouslySetInnerHTML={{ __html: videoDescription }} />
          </div>
        </div>
      </div>
      <div className="side-video-container" />
    </div>
  );
};

export default WatchPage;
