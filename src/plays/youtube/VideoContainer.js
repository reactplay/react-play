import VideoCard from './VideoCard';
import { useState, useEffect } from 'react';
import { YOUTUBE_VIDEOLIST_API } from './constant';

const VideoContainer = () => {
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    getData(YOUTUBE_VIDEOLIST_API);
  }, []);

  const getData = async (api) => {
    try {
      let data = await fetch(api);
      let jsonData = await data.json();
      setVideoList(jsonData.items);
    } catch (error) {
      alert(error);
    }
  };

  if (!videoList) {
    return null;
  }

  return (
    <div className="video-container">
      {videoList.map((video) => (
        <VideoCard key={video.id} videoData={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
