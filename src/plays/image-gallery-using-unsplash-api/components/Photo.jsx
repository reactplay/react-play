const Photo = (props) => {
  const { urls, description, likes, user } = props;

  const { regular } = urls;
  const { name, username, portfolio_url, profile_image } = user;
  const { medium } = profile_image;

  return (
    <>
      <div className="photo-frame">
        <a href={regular}>
          <img alt={description} src={regular} />
        </a>
        <div className="photo-info">
          <div>
            <h4>{name}</h4>
            <h6>{username}</h6>
            <p>{likes} Likes</p>
          </div>
          <a href={portfolio_url}>
            <img alt="" src={medium} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Photo;
