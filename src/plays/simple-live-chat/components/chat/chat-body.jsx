// vendors
import { Fragment, useEffect, useRef, useState } from "react";

// css
import "./chat-body.scss";

// components
import User from "./components/User";

// hooks
import useDateFormat from "./hooks/useDateFormat";

const ChatBody = ({ message, uid, loading }) => {
  const [chatNode, setChatNode] = useState([]);
  const [dateTimeFormatter] = useDateFormat();

  const scrollHandler = useRef();

  const showDateHandler = (array = [], currIndex) => {
    const formattedDate = dateTimeFormatter(
      array[currIndex]?.createdAt?.seconds,
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
      <div className='simple-live-chat-date-display'>
        <p>{date}</p>
      </div>
    );
  };

  const displaySenderNameHandler = (val) => () => {
    if (chatNode.includes(val)) {
      return setChatNode(chatNode.filter((item) => item !== val));
    }
    return setChatNode([...chatNode, val]);
  };

  useEffect(() => {
    scrollHandler.current?.scrollIntoView();
  }, [message]);

  const DisplayNameComponent = ({ displayName, sender, id }) => {
    if (!chatNode.includes(id)) return null;
    return (
      <div className={`simple-live-chat-text-${sender ? "right" : "left"}`}>
        {displayName}
      </div>
    );
  };

  if (loading) return null;

  return (
    <div className='simple-live-chat-body'>
      {!loading &&
        message.map((item, idx) => {
          if (item.uid === uid) {
            return (
              <Fragment key={idx}>
                <DateDisplayComp idx={idx} message={message} />
                <div className='simple-live-chat-message simple-live-chat-message-sender'>
                  <div>
                    <span
                      onClick={displaySenderNameHandler(item?.id)}
                      className='simple-live-chat-message-context simple-live-chat-message-sender-text'
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
              <Fragment key={idx}>
                <DateDisplayComp idx={idx} message={message} />
                <div className='simple-live-chat-message simple-live-chat-message-receiver'>
                  <User
                    photoURL={item?.photoURL}
                    onClick={displaySenderNameHandler(item?.id)}
                  />
                  <div>
                    <span
                      onClick={displaySenderNameHandler(item?.id)}
                      className='simple-live-chat-message-context simple-live-chat-message-receiver-text'
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
