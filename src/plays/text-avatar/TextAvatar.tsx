import PlayHeader from 'common/playlists/PlayHeader';
import React from 'react';
import UserCard from './components/UserCard';
import { API_URL } from './constants';
import { useFetchUser } from './hooks/useFetchUser';
import './style.scss';

function TextAvatar(props: any) {
    const { users } = useFetchUser({ url: API_URL});
    return (
        <div className="play-details">
            <PlayHeader play={props} />
            <div className="play-details-body">
                <div className='text-avatar_container'>
                    {
                        users.map((user, index) => (
                            <UserCard name={user.name} key={index}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TextAvatar;