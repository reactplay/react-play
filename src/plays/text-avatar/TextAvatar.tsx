import React from 'react';
import UserCard from './components/UserCard';
import { useFetchUser } from './hooks/useFetchUser';
import './style.scss';
const API = 'https://randomuser.me/api/?inc=name&results=10';

function TextAvatar() {
    const { users } = useFetchUser({ url: API });
    return (
        <div className='container'>
            {
                users.map((user, index) => (
                    <UserCard user={user} key={index} />
                ))
            }
        </div>
    )
}

export default TextAvatar;