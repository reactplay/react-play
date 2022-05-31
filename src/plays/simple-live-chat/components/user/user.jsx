
import { useState } from "react";
import user from '../../images/user_icon.png'
import './user.scss'

const User = ({ userImage }) => {

  const [currImage, setCurrImage] = useState(userImage);

  const onLoadHandler = (e) => {
    console.log("loaded");
  };

  const onErrorHandler = (e) => {
    console.log("image display error");
    setCurrImage(user)
  };

  return (
    <div className="user-img">
      <img
        onLoad={onLoadHandler}
        onError={onErrorHandler}
        src={currImage}
        alt='user'
      />
    </div>
  );
};

export default User;
