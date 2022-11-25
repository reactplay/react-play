// vendors
import { useState } from "react";

// assets
import userIcon from "../../../images/user_icon.png";

const User = ({ photoURL, onClick }) => {
  const [defaultImage, setDefaultImage] = useState(photoURL);
  return (
    <img
      src={defaultImage}
      alt='avatar'
      onClick={onClick}
      className='simple-live-chat-user'
      onError={() => setDefaultImage(userIcon)}
    />
  );
};

export default User;
