const InitialButtonOptions = (props) => {
  const handleAccountLockedClick = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleAccountLocked(message);
  };
  const handlePasswordLockedClick = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleResetPasswordDepth1(message);
  };

  return (
    <div className="text-[#0e72ed] ml-[4rem] font-extrabold text-[14px]">
      <button
        aria-label="My Account is Locked"
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        title="My Account is Locked"
        onClick={() => handleAccountLockedClick('My Account is Locked')}
      >
        My Account is Locked
      </button>
      <button
        aria-label="Reset Password"
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        title="Reset Password"
        onClick={() => handlePasswordLockedClick('Reset Password')}
      >
        Reset Password
      </button>
      <button
        aria-label="Not Receiving Emails from Zoom"
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="Not Receiving Emails from Zoom"
      >
        Not Receiving Emails from Zoom
      </button>
      <button
        aria-label="Zoom Account Does Not Exist"
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="Zoom Account Does Not Exist"
      >
        Zoom Account Does Not Exist
      </button>
    </div>
  );
};

export default InitialButtonOptions;
