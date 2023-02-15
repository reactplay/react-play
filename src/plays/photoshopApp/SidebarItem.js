import React from 'react';

const SidebarItem = ({ name, active, handleClick }) => {
  const className = `sidebar-item ${active ? 'active' : ''}`;

 

  return (
    <button className={className} onClick={handleClick}>
      {name}
    </button>
  );
};

export default SidebarItem;
