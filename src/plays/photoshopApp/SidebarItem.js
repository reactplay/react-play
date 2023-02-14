import React from 'react';

const SidebarItem = ({ name, active, handleClick }) => {
  const className = `sidebar-item ${active ? 'active' : ''}`;

  const handleClickInternal = () => {
    handleClick();
  };

  return (
    <button className={className} onClick={handleClickInternal}>
      {name}
    </button>
  );
};

export default SidebarItem;
