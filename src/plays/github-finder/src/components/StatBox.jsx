import React from 'react';

export default function StatBox(props) {
  return (
    <div className="profile-stats-box">
      <div className="profile-stat">
        <p>Repos</p>
        <p>{props?.public_repos}</p>
      </div>
      <div className="divider" />
      <div className="profile-stat">
        <p>Followers</p>
        <p>{props?.followers}</p>
      </div>
      <div className="divider" />
      <div className="profile-stat">
        <p>Following</p>
        <p>{props?.following}</p>
      </div>
    </div>
  );
}
