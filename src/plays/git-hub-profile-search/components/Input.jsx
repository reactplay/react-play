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
    }

    return (
        <form className='form'>
            <input value={username} placeholder="Search User" onChange={(e) => setUsername(e.target.value)} className="search" />
            <button type="submit" onClick={handleSubmit} className="btn">
                Search
            </button>
        </form>
    )
}

export default Input