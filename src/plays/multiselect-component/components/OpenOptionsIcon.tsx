import React from 'react';

const OpenOptionsIcon = ({ onClick, size }: { onClick: () => void; size?: number }) => {
  return (
    <img
      alt="down-arrow"
      className="icon-button"
      onClick={onClick}
      src={`https://img.icons8.com/ios/${size || 20}/000000/expand-arrow--v2.png`}
    />
  );
};

export default OpenOptionsIcon;
