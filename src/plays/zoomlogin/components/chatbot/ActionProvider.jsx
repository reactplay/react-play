import React from 'react';
import { createClientMessage, createCustomMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleButtonClickResponse = (message) => {
    const userMessage = createClientMessage(`${message}`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage]
    }));
  };

  const handleNotFindAnswer = () => {
    const firstBotMessage = createChatBotMessage(
      "Hmm, I couldn't find an answer to that. Can you try asking it a different way?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  const handleAccountLocked = () => {
    const firstBotMessage = createChatBotMessage(
      'Your Zoom account will be inaccessible if it is disabled, deactivated, or locked. I can help you recover your account.'
    );
    const secondBotMessage = createChatBotMessage(
      'Click the account access issue you are having below ⬇️',
      {
        widget: 'accountLockedOptions'
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage]
    }));
  };

  const handleAccountAccessIssue = () => {
    const firstBotMessage = createChatBotMessage('Your Zoom account will be inaccessible....');
    const secondBotMessage = createChatBotMessage('Click the account access...', {
      widget: 'accountAccessIssue'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage]
    }));
  };

  const handleError1003 = () => {
    const firstBotMessage = createCustomMessage('value', 'requestAppealCustommsg', {
      widget: 'error1003Option'
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  const handleRequestAppeal = () => {
    const firstBotMessage = createChatBotMessage(
      'The Zoom Trust & Safety team will review your appeal and provide additional information.'
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  const handleResetPasswordDepth1 = () => {
    const firstBotMessage = createCustomMessage('value', 'resetPassword2CustomMsg');
    const secondBotMessage = createCustomMessage('value', 'resetPassword2NoteCustomMsg', {
      widget: 'resetPasswordDepth1Options'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage]
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage("here's a nice dog pics for you.", {
      widget: 'dogPicture'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }));
  };

  const handleAccountDisabled = () => {
    const firstBotMessage = createChatBotMessage(
      'If you sign in to your Zoom account and receive a message that says "Account is disabled. Please contact your account owner or administrator" this means your account owner or admins have deactivated your Zoom account.'
    );
    const secondBotMessage = createChatBotMessage(
      'You will need to contact your account owner or admins directly to reactivate your account.'
    );
    const thirdBotMessage = createCustomMessage('value', 'reactivateAccountCustomMsg', {
      widget: 'accountDisabledOption'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage, thirdBotMessage]
    }));
  };

  const handleReactivateAccount = () => {
    const firstBotMessage = createChatBotMessage('Let me know if you need additional assistance.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  const handleDisabledAccount = () => {
    const firstBotMessage = createChatBotMessage('Let me know if you need additional assistance.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  const handleAccountBlocked = () => {
    const firstBotMessage = createChatBotMessage(
      'When multiple sign-in attempts to your Zoom account have failed because of incorrect credentials, your Zoom account will be blocked and you will be locked out.'
    );
    const secondBotMessage = createCustomMessage('value', 'resetPasswordCustomMsg', {
      widget: 'blockedResetPasswordOption'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage, secondBotMessage]
    }));
  };

  const handleResetPasswordDepth2 = () => {
    const firstBotMessage = createCustomMessage('value', 'resetPassword3CustomMsg', {
      widget: 'resetPasswordDepth2Options'
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, firstBotMessage]
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleButtonClickResponse,
            handleNotFindAnswer,
            handleAccountLocked,
            handleAccountAccessIssue,
            handleError1003,
            handleRequestAppeal,
            handleResetPasswordDepth1,
            handleReactivateAccount,
            handleAccountDisabled,
            handleAccountBlocked,
            handleDisabledAccount,
            handleResetPasswordDepth2,
            handleDog
          }
        });
      })}
    </div>
  );
};

export default ActionProvider;
