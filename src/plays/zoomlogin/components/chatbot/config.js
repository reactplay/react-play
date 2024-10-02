import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';

import DogPicture from './DogPicture';
import FlightBotAvatar from './FlightBotAvatar';
import Header from './Header.jsx';
import MyUserAvatar from './MyUserAvatar';

import AccountBlockedOption from './widget/AccountBlockedOption';
import AccountDisabledOption from './widget/AccountDisabledOption';
import AccountLockedOptions from './widget/AccountLockedOptions';
import BlockedResetPasswordOption from './widget/BlockedResetPasswordOption';
import {
  ReactivateAccountCustomMsg,
  RequestAppealCustomMsg,
  ResetPassword2CustomMsg,
  ResetPassword2NoteCustomMsg,
  ResetPassword3CustomMsg,
  ResetPasswordCustomMsg
} from './widget/CustomMessages';
import Error1030Option from './widget/Error1003Option';
import InitialButtonOptions from './widget/InitialButtonOptions';
import { InitialCustomMsg1, InitialCustomMsg2 } from './widget/InitialCustomMessages';
import ResetPasswordDepth1Options from './widget/ResetPasswordDepth1Options';
import ResetPasswordDepth2Options from './widget/ResetPasswordDepth2Options';

const config = ({ isChatbotHeaderClose, handleChatbotModal, toggleHeaderActionMenuModal }) => {
  return {
    initialMessages: [
      createCustomMessage('test', 'initialCustomMsg1'),
      createCustomMessage('test', 'initialCustomMsg2'),
      createChatBotMessage(
        "It looks like you need help accessing your Zoom account. I'm here to help! How can I assist you?",
        {
          widget: 'initialButtonOptions',
          withAvatar: false
        }
      )
    ],
    widgets: [
      {
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />
      },
      {
        widgetName: 'initialButtonOptions',
        widgetFunc: (props) => <InitialButtonOptions {...props} />
      },
      {
        widgetName: 'resetPasswordDepth1Options',
        widgetFunc: (props) => <ResetPasswordDepth1Options {...props} />
      },
      {
        widgetName: 'blockedResetPasswordOption',
        widgetFunc: (props) => <BlockedResetPasswordOption {...props} />
      },
      {
        widgetName: 'accountLockedOptions',
        widgetFunc: (props) => <AccountLockedOptions {...props} />
      },
      {
        widgetName: 'error1003Option',
        widgetFunc: (props) => <Error1030Option {...props} />
      },
      {
        widgetName: 'resetPasswordDepth2Options',
        widgetFunc: (props) => <ResetPasswordDepth2Options {...props} />
      },
      {
        widgetName: 'accountDisabledOption',
        widgetFunc: (props) => <AccountDisabledOption {...props} />
      },
      {
        widgetName: 'accountBlockedOption',
        widgetFunc: (props) => <AccountBlockedOption {...props} />
      }
    ],
    customComponents: {
      header: () => (
        <Header
          handleChatbotModal={handleChatbotModal}
          isChatbotHeaderClose={isChatbotHeaderClose}
          toggleHeaderActionMenuModal={toggleHeaderActionMenuModal}
        />
      ),
      botAvatar: (props) => <FlightBotAvatar {...props} />,
      userAvatar: (props) => <MyUserAvatar {...props} />
    },
    customMessages: {
      initialCustomMsg1: (props) => <InitialCustomMsg1 {...props} />,
      initialCustomMsg2: (props) => <InitialCustomMsg2 {...props} />,
      requestAppealCustommsg: (props) => <RequestAppealCustomMsg {...props} />,
      reactivateAccountCustomMsg: (props) => <ReactivateAccountCustomMsg {...props} />,
      resetPasswordCustomMsg: (props) => <ResetPasswordCustomMsg {...props} />,
      resetPassword2CustomMsg: (props) => <ResetPassword2CustomMsg {...props} />,
      resetPassword2NoteCustomMsg: (props) => <ResetPassword2NoteCustomMsg {...props} />,
      resetPassword3CustomMsg: (props) => <ResetPassword3CustomMsg {...props} />
    }
  };
};

export default config;
