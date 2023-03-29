import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function Header(props) {
  const [isThemeChanged, setIsThemeChanged] = useState(false);
  const [themeMode, setThemeMode] = useState('Light');

  function changeMode() {
    if (themeMode === 'Light') {
      setThemeMode('Dark');
      setIsThemeChanged(true);
      props.changeThemeMode('light');
    } else {
      setThemeMode('Light');
      setIsThemeChanged(false);
      props.changeThemeMode('dark');
    }
  }

  return (
    <div className="header">
      <h1 className="logo-heading">Github Finder</h1>
      <div className="theme-container">
        <p className="theme" onClick={changeMode}>
          {themeMode}
        </p>
        <span onClick={changeMode}>
          <i className={`fa-regular fa-${isThemeChanged ? 'moon' : 'sun'}`} />
        </span>
      </div>
    </div>
  );
}
