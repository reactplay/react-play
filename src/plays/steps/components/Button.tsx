import React, { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  bgColor: string;
  textColor: string;
  disable: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({ textColor, bgColor, onClick, disable, children }: ButtonProps) {
  const disabledStyles = { background: 'grey', color: 'white', cursor: 'not-allowed' };

  return (
    <button
      style={disable ? disabledStyles : { backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
