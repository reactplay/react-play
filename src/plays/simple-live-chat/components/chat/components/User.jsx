// vendors
import { useState } from 'react';

// assets
import userIcon from '../../../images/user_icon.png';

const User = ({ photoURL, onClick }) => {
  const [defaultImage, setDefaultImage] = useState(photoURL);

  return (
    <img
      alt="avatar"
      className="simple-live-chat-user"
      src={defaultImage}
      onClick={onClick}
      onError={() => setDefaultImage(userIcon)}
    />
  );
};

export default User;
