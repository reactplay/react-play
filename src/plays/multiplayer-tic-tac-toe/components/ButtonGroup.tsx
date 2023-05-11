import React from 'react';

import { FaTimes, FaRegCircle } from 'react-icons/fa';

type ButtonGroupProps = {
  setIsCross: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ButtonGroup({ setIsCross }: ButtonGroupProps) {
  return (
    <>
      <section className="flex justify-center">
        <button
          className="flex justify-center items-center w-28 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black"
          onClick={() => setIsCross(true)}
        >
          <span className="hidden">Cross</span>
          <FaTimes className="text-2xl font-extrabold text-red-500" />
        </button>
        <button
          className="flex justify-center items-center w-28 h-16 m-3 cursor-pointer border rounded-lg bg-[#00f2fe] hover:border-black"
          onClick={() => setIsCross(false)}
        >
          <span className="hidden">Circle</span>
          <FaRegCircle className="text-2xl font-extrabold text-red-500" />
        </button>
      </section>
    </>
  );
}
