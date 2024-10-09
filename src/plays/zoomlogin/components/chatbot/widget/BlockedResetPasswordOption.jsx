const BlockedResetPasswordOption = (props) => {
  const clickHandle = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleResetPasswordDepth1(message);
  };

  return (
    <div className="text-[#0e72ed] ml-[4rem] font-extrabold text-[14px]">
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        onClick={() => clickHandle('Reset Password')}
      >
        Reset Password
      </button>
    </div>
  );
};

export default BlockedResetPasswordOption;
