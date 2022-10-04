import React from 'react';
import { User } from '../../types';
import Avatar from '../Avatar';
import './style.scss';
type Props = {
    user: User
}
function UserCard({ user }: Props) {
    const { first, last } = user.name;
    return (
        <div className='card'>
            <Avatar first={first} last={last} />
            <p className='username'>{first} { last }</p>
        </div>
    )
}

export default UserCard;