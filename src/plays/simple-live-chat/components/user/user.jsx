
import { useState } from "react";
import user from '../../images/user_icon.png'
import './user.scss'

const User = ({ userImage }) => {

  const [currImage, setCurrImage] = useState(userImage);

  const onErrorHandler = (e) => {
    console.error("simple-live-chat image display error");
    setCurrImage(user)
  };

  return (
    <div className="simple-live-chat-user-img">
      <img
        onError={onErrorHandler}
        src={currImage}
        alt='user'
      />
    </div>
  );
};

export default User;
