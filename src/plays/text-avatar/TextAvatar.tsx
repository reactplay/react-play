import React from 'react';
import UserCard from './components/UserCard';
import { API_URL } from './constants';
import { useFetchUser } from './hooks/useFetchUser';
import './style.scss';

function TextAvatar() {
    const { users } = useFetchUser({ url: API_URL});
    return (
        <div className='text-avatar_container'>
            {
                users.map((user, index) => (
                    <UserCard name={user.name} key={index}  />
                ))
            }
        </div>
    )
}

export default TextAvatar;