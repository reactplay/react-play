import React, { useRef } from 'react';
import { MdRefresh } from 'react-icons/md';
type PropType = {
  className?: string;
  onReset: () => void;
};

const ResetButton = ({ onReset: handleReset, className = '' }: PropType) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    buttonRef.current!.blur();
    handleReset();
  };

  return (
    <React.Fragment>
      <button
        className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
        ref={buttonRef}
        onClick={handleClick}
      >
        <MdRefresh className="w-6 h-6" />
      </button>
    </React.Fragment>
  );
};

export default ResetButton;
