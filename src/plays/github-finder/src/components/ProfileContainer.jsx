import React from 'react';
import AuthorBox from './AuthorBox';
import Bio from './Bio';
import DetailBox from './DetailBox';
import StatBox from './StatBox';

let joinedDate;

export default function ProfileContainer(props) {
  if (JSON.stringify(props.userData) !== '{}') {
    const createdAt = props.userData?.created_at?.split('T')?.shift()?.split('-');

    if (createdAt) {
      const [year, month, day] = createdAt;
      const date = new Date(year, month - 1, day);
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      joinedDate = date?.toLocaleDateString('en-US', options);
    }
  }

  const {
    name,
    html_url,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    email,
    company
  } = props.userData;

  return (
    <div className="profile-container">
      <div className="profile-desc">
        <div className="author-content">
          <div className="profile-avatar">
            <img src={props.userData.avatar_url} />
          </div>
          <AuthorBox html_url={html_url} joinedDate={joinedDate} login={login} name={name} />
        </div>
        <Bio bio={bio} />
        <div className="profile-stats">
          <StatBox followers={followers} following={following} public_repos={public_repos} />
        </div>
        <div className="profile-detail-box">
          <DetailBox
            blog={blog}
            company={company}
            email={email}
            location={location}
            twitter_username={twitter_username}
          />
        </div>
      </div>
    </div>
  );
}
