import zoomsupport from '../../../assets/zoomsupport.png';

const AvatarFirstMsg = (props) => {
  const now = new Date();
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(now);

  return (
    <>
      <div className="relative flex items-baseline gap-3">
        <img alt="zoomsupport" className="w-11 h-11 absolute bottom-[-44px]" src={zoomsupport} />
        <div className="flex">
          <div className="pb-2 pl-16 text-xs " style={{ fontSize: '11px' }}>
            Bot{' '}
            <span
              className="inline-block bg-gray-100 text-[#02021c99] px-1 mx-1 font-bold"
              style={{ fontSize: '10px' }}
            >
              BOT
            </span>{' '}
            <span className="text-[#0404138f]" style={{ fontSize: '11px' }}>
              {formattedTime}
            </span>
          </div>
        </div>
      </div>
      <div className="react-chatbot-kit-chat-bot-message-container">
        <div className="react-chatbot-kit-chat-bot-message">{props.children}</div>
      </div>
    </>
  );
};

export const RequestAppealCustomMsg = () => {
  return (
    <AvatarFirstMsg>
      <span>
        Accounts that don't follow{' '}
        <u>
          <a href="https://www.zoom.com/en/trust/terms/" rer="noopener noreferrer" target="_blank">
            Zoom's Terms of Service
          </a>{' '}
        </u>{' '}
        or{' '}
        <u>
          <a
            href="https://explore.zoom.us/en/acceptable-use-guidelines/"
            rer="noopener noreferrer"
            target="_blank"
          >
            {' '}
            Acceptable Use Guidelines
          </a>
        </u>{' '}
        may be disabled without warning. Click <strong>Request an Appeal</strong> below to submit an
        appeal to Zoom's Trust and Safety team.
      </span>
    </AvatarFirstMsg>
  );
};

export const ReactivateAccountCustomMsg = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
      <div className="react-chatbot-kit-chat-bot-message">
        Click <strong>Reactivate Account</strong> below ⬇️ for instructions to provide to your
        account owner or admins.
      </div>
    </div>
  );
};

export const ResetPasswordCustomMsg = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
      <div className="react-chatbot-kit-chat-bot-message">
        <span>
          Please wait 30 minutes and attempt to sign in to your Zoom account again. If you are not
          sure what your password is, select <strong>Reset Password</strong> below ⬇️
        </span>
      </div>
    </div>
  );
};
// /avatar
export const ResetPassword2CustomMsg = () => {
  return (
    <AvatarFirstMsg>
      <span>
        Click the <strong>Reset Password</strong> button below to start resetting your password.
      </span>
    </AvatarFirstMsg>
  );
};

export const ResetPassword2NoteCustomMsg = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-message-container">
      <div className="react-chatbot-kit-chat-bot-message">
        <i>
          <strong>Note</strong>: For SSO accounts please contact your IT admin for assistance.
        </i>
      </div>
    </div>
  );
};

// avatar
export const ResetPassword3CustomMsg = () => {
  return (
    <AvatarFirstMsg>
      <span>
        On the{' '}
        <u>
          <a
            href="https://zoom.us/signin?_x_zm_rtaid=fivljXWpQrKKoem7pDiJ-A.1718349161955.560ac81f4ba3e98f5c967286d2f85289&_x_zm_rhtaid=430#/forgot-password"
            rer="noopener noreferrer"
            target="_blank"
          >
            Reset Password page
          </a>
        </u>
        , follow these instructions: <br />
        <br />
        <i>
          <strong>Note</strong>: To continue following instructions here, select the{' '}
          <span className="text-red-600">Help</span> icon on the Reset Password page. <br />
          <br />
        </i>
        <ul className="list-disc pl-10">
          <li>
            Enter your registered email address in the <strong>Email Address</strong> field
          </li>
          <li>
            Click the <strong>I'm not a robot</strong> checkbox to complete the captcha verification
          </li>
          <li>
            Click <strong>Send</strong>
          </li>
          <br />
        </ul>
        Check your email inbox and spam folders. Did you receive a verification email?
      </span>
    </AvatarFirstMsg>
  );
};
