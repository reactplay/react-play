const ResetPasswordDepth2Options = (props) => {
  const handleYes = (message) => {
    props.actionProvider.handleButtonClickResponse(message);
  };

  return (
    <div className="text-[#0e72ed] ml-[4rem] font-extrabold text-[14px]">
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        onClick={() => handleYes('Yes')}
      >
        Yes
      </button>
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="NOT IMPLEMENTED"
        onClick={() => alert('NOT IMPLEMENTED')}
      >
        No
      </button>
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-not-allowed"
        title="NOT IMPLEMENTED"
        onClick={() => alert('NOT IMPLEMENTED')}
      >
        Go back to previous menu
      </button>
    </div>
  );
};

export default ResetPasswordDepth2Options;
