import React from "react";

const LeftSide = ({ image, profName, userName, twitterUserName }) => {
  return (
    <div className="left">
      <img src={image} alt="profile-pic" className="profPic" />
      <p>
        Name: <span>{profName}</span>
      </p>

      <p>
        Username:
        <a href={`https://dev.to/${userName}`}>
          <span>{userName}</span>
        </a>
      </p>

      <p>
        Twitter Username:
        <a href={`https://twitter.com/${twitterUserName}`}>
          <span>{twitterUserName}</span>
        </a>
      </p>
    </div>
  );
};

export default LeftSide;
