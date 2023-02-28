const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="video-wrapper">
      <iframe
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="video-iframe"
        frameBorder="0"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        width="560"
      />
    </div>
  );
};

export default YouTubeEmbed;
