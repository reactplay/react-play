import React from 'react';
const passwordResetWords = ['reset', 'password'];

const MessageParser = ({ children, actions }) => {
  const parse = (rawMessage) => {
    let message = rawMessage.toLowerCase();

    if (passwordResetWords.some((word) => message.includes(word))) {
      actions.handleResetPasswordDepth1();
    } else if (message.includes('lock')) {
      actions.handleAccountLocked();
    } else if (message.includes('dog')) {
      actions.handleDog();
    } else {
      actions.handleNotFindAnswer();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;
