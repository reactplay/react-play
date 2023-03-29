import React, { useState } from 'react';
import Header from './Header';
import ProfileContainer from './ProfileContainer';
import SearchBox from './SearchBox';
import Error from './Error';

/** ******************************/
// Github api
const url = 'https://api.github.com/users/';
const rootColors = document.documentElement.style;

export default function App() {
  const [userData, setUserData] = useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [error, setError] = useState(false);
  const [isErrorVisisble, setErrorVisible] = useState(false);

  // Getting username value inserted by user

  function getUser(value) {
    if (value) {
      fetch(`${url}${value}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error();
          }
          setShowProfile(true);

          return res.json();
        })
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => {
          setShowProfile(false);
          setError(true);
          setErrorVisible(true);
          setTimeout(() => {
            setErrorVisible(false);
          }, 2500);
        });
      setError(false);
    } else {
      setShowProfile(false);
      setError(true);
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 2500);
    }
  }

  /** ******************************/
  // Changing theme function
  function changeThemeMode(value) {
    if (value === 'dark') {
      rootColors.setProperty('--primary-col', `#141d2f`);
      rootColors.setProperty('--secondary-col', `#1e2a47`);
      rootColors.setProperty('--primary-text', `#fff`);
      rootColors.setProperty('--lm-text', `#93a6c3`);
      rootColors.setProperty('--divider-col', `#353f59`);
      rootColors.setProperty('--shadow', `0px 10px 25px -7px rgba(70, 96, 187, 0.2)`);
    } else if (value === 'light') {
      rootColors.setProperty('--primary-col', `#f6f8ff`);
      rootColors.setProperty('--secondary-col', `#fefefe`);
      rootColors.setProperty('--primary-text', `#000`);
      rootColors.setProperty('--divider-col', `#999`);
      rootColors.setProperty('--lm-text', `#333`);
      rootColors.setProperty('--shadow', `0px 20px 40px -10px rgba(0, 0, 0, 0.4);`);
    }
  }

  return (
    <div className="main-container">
      <Header changeThemeMode={changeThemeMode} />
      <SearchBox getData={getUser} />
      {error && isErrorVisisble && <Error />}
      {showProfile && <ProfileContainer userData={userData} />}
    </div>
  );
}
