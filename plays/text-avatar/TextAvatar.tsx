import PlayHeader from 'common/playlists/PlayHeader';
import React from 'react';
import UserCard from './components/UserCard';
import { API_URL } from './constants';
import { useFetchUser } from './hooks/useFetchUser';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TextAvatar(props: any) {
  const { users } = useFetchUser({ url: API_URL });

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <div className="text-avatar_container">
          {users.map((user, index) => (
            <UserCard key={index} name={user.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TextAvatar;
