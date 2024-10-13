const resetLink =
  'https://zoom.us/signin?_x_zm_rtaid=HKrzXjrHSn2vowuK4sLAaw.1726436024755.6343ff4a8170c09e626fbdcb49099710&_x_zm_rhtaid=186#/forgot-password';

const ResetPasswordDepth1Options = (props) => {
  const handleResetPassword = (message) => {
    window.open(resetLink, '_blank', 'noreferrer');
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleResetPasswordDepth2(message);
  };

  return (
    <div className="text-[#0e72ed] ml-[4rem] font-extrabold text-[14px]">
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        onClick={() => handleResetPassword('Reset Password')}
      >
        Reset Password
      </button>
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="NOT IMPLEMENTED"
        onClick={() => alert('NOT IMPLEMENTED')}
      >
        Issues after resetting my password
      </button>
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="NOT IMPLEMENTED"
        onClick={() => alert('NOT IMPLEMENTED')}
      >
        Other SSO related issues
      </button>
    </div>
  );
};

export default ResetPasswordDepth1Options;
