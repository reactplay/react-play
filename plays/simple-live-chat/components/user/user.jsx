import { useState } from 'react';
import user from '../../images/user_icon.png';
import './user.scss';

const User = ({ userImage }) => {
  const [currImage, setCurrImage] = useState(userImage);

  const onErrorHandler = () => {
    setCurrImage(user);
  };

  return (
    <div className="simple-live-chat-user-img">
      <img alt="user" src={currImage} onError={onErrorHandler} />
    </div>
  );
};

export default User;
