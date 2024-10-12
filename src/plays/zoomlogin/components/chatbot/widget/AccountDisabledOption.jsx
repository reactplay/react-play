const disabledAccountLink =
  'https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066997#h_16319724-d120-4be6-af5d-31582d134ea0';

const AccountDisabledOption = (props) => {
  const appealClickHandle = (message) => {
    window.open(disabledAccountLink, '_blank', 'noreferrer');
    props.actionProvider.handleButtonClickResponse(message);
    props.actionProvider.handleReactivateAccount(message);
  };

  return (
    <div className="text-[#0e72ed] ml-[4rem] font-extrabold text-[14px]">
      <button
        className="inline-block border border-[#0e72ed] rounded-3xl px-4 py-1.5 m-1 hover:bg-[#0e72ed] hover:text-white hover:cursor-pointer"
        onClick={() => appealClickHandle('Reactivate Account')}
      >
        Reactivate Account
      </button>
    </div>
  );
};

export default AccountDisabledOption;
