import format from "date-fns/format";
import { Fragment, useEffect, useRef, useState } from "react";

// css
import "./chat-body.scss";

// assets
import userIcon from "../../images/user_icon.png";

const User = ({ photoURL, onClick }) => {
  const [defaultImage, setDefaultImage] = useState(photoURL);
  return (
    <img
      src={defaultImage}
      alt='avatar'
      onClick={onClick}
      className='user'
      onError={() => setDefaultImage(userIcon)}
    />
  );
};

const ChatBody = ({ message, uid, loading }) => {
  const [node, setNode] = useState([]);
  const scrollHandler = useRef();

  const dateTimeFormatter = (val) => {
    return format(new Date(val * 1000), "hh:mm bbb");
  };

  const showDateHandler = (array = [], currIndex) => {
    const formattedDate = format(
      new Date(array[currIndex]?.createdAt?.seconds * 1000),
      "dd MMM yyyy"
    );
    if (currIndex === 0) return formattedDate;
    const prev = array[currIndex - 1];
    const prevDate = new Date(prev?.createdAt * 1000).getDate();
    const currDate = new Date(array[currIndex].createdAt * 1000).getDate();

    if (prevDate !== currDate) {
      return formattedDate;
    }
    return null;
  };

  const DateDisplayComp = ({ idx, message }) => {
    const date = showDateHandler(message, idx);
    if (!date) return null;
    return (
      <div className='date-display'>
        <p>{date}</p>
      </div>
    );
  };

  const displaySenderNameHandler = (val) => () => {
    if (node.includes(val)) {
      return setNode(node.filter((item) => item !== val));
    }
    return setNode([...node, val]);
  };

  useEffect(() => {
    scrollHandler.current?.scrollIntoView();
  }, [message]);

  const DisplayNameComponent = ({ displayName, sender, id }) => {
    if (!node.includes(id)) return null;
    return (
      <div className={sender ? "text-right" : "text-left"}>{displayName}</div>
    );
  };

  if (loading) return null;

  return (
    <div className='chat-body'>
      {!loading &&
        message.map((item, idx) => {
          if (item.uid === uid) {
            return (
              <Fragment key={`${item?.text.slice(0, 5)}${idx}`}>
                <DateDisplayComp idx={idx} message={message} />
                <div className='message message-sender'>
                  <div>
                    <span
                      onClick={displaySenderNameHandler(item?.id)}
                      className='message-context message-sender-text'
                    >
                      {item?.text}
                      <span>{dateTimeFormatter(item?.createdAt)}</span>
                    </span>
                    <DisplayNameComponent {...item} sender={true} />
                  </div>
                  <User
                    photoURL={item?.photoURL}
                    onClick={displaySenderNameHandler(item?.id)}
                  />
                </div>
              </Fragment>
            );
          } else {
            return (
              <Fragment key={`${item?.text.slice(0, 5)}${idx}`}>
                <DateDisplayComp idx={idx} message={message} />
                <div className='message message-receiver'>
                  <User
                    photoURL={item?.photoURL}
                    onClick={displaySenderNameHandler(item?.id)}
                  />
                  <div>
                    <span
                      onClick={displaySenderNameHandler(item?.id)}
                      className='message-context message-receiver-text'
                    >
                      {item?.text}
                      <span>{dateTimeFormatter(item?.createdAt)}</span>
                    </span>
                    <DisplayNameComponent {...item} sender={false} />
                  </div>
                </div>
              </Fragment>
            );
          }
        })}
      <div ref={scrollHandler}></div>
    </div>
  );
};

export default ChatBody;
