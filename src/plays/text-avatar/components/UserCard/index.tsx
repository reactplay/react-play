import React from 'react';
import { User } from '../../types';
import Avatar from '../Avatar';
import './style.scss';

function UserCard({ name }: User) {
    const { first, last } = name;
    return (
        <div className='text-avatar_card'>
            <Avatar first={first} last={last} />
            <p className='text-avatar_username'>{first} { last }</p>
        </div>
    )
}

export default UserCard;