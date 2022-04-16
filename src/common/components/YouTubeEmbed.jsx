
const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="video-wrapper">
      <iframe
        className="video-iframe" 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title={ title } 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
};

export default YouTubeEmbed;