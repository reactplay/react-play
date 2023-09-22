import React from 'react';

const CloseOptionsIcon = ({ onClick, size }: { onClick: () => void; size?: number }) => {
  return (
    <img
      alt="close"
      className="icon-button"
      src={`https://img.icons8.com/ios/${size || 20}/000000/delete-sign--v1.png`}
      onClick={onClick}
    />
  );
};

export default CloseOptionsIcon;
