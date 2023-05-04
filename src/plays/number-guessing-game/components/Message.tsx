import React from 'react';

type MessagePropType = {
  message: string;
};

const Message = (props: MessagePropType) => {
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
};

export default Message;
