import React, { useState } from 'react';
import { useResultContext } from '../context/ResultContextProvider';

const Input = () => {
  const { getRepos, getUser } = useResultContext();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(username);
    getRepos(username);
    setUsername('');
  };

  return (
    <form className="nirban-github-profile-form" onSubmit={handleSubmit}>
      <input
        autoFocus
        required
        className="nirban-github-profile-search"
        placeholder="Search Username"
        tabIndex={0}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="nirban-github-profile-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Input;
