import React from 'react';

const SidebarItem = ({ name, active, handleClick }) => {
  const className = `photoshopApp-sidebar-item ${active ? 'active' : ''}`;

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default SidebarItem;
