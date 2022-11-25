import React from 'react';

const Navbar = ({ isConnected, connect }) => {
  return (
    <>
      <div className=" flex justify-between items-center text-[#010326]">
        <div className="flex justify-between items-center">
          <div className="px-2 md:px-5 text-base md:text-xl font-semibold text-[#010326]">
            Markets
          </div>
          <div className="px-2 md:px-5 text-base md:text-xl font-semibold text-[#010326]">
            Assets
          </div>
        </div>
        {isConnected() ? (
          <button
            className="bg-[#00f1fec5] hover:bg-[#00f1fe] rounded-3xl px-2 py-1 text-base md:px-5 md:py-2 md:text-xl font-semibold text-[#010326]"
            type="submit"
          >
            Connected
          </button>
        ) : (
          <button
            className="bg-[#00f1fec5] hover:bg-[#00f1fe] rounded-3xl px-2 py-1 text-base md:px-5 md:py-2 md:text-xl font-semibold text-[#010326]"
            type="submit"
            onClick={connect}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
