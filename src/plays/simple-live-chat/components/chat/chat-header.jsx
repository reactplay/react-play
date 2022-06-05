import User from "../user/user";
import "./chat-header.scss";

const ChatHeader = ({ userImage, signOutHandler, displayName, loading }) => {
  if (loading) return null;
  return (
    <div className='simple-live-chat-chat-header'>
      <div>
        <div>
          <span>
            <User userImage={userImage} />
            <span>{displayName}</span>
          </span>
          <button onClick={signOutHandler}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
