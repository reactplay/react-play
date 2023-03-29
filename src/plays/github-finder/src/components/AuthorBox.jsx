import React from 'react';

export default function AuthorBox(props) {
  return (
    <div className="profile-info">
      <div className="name-box">
        <div className="profile-name">
          Name : <span>{props?.name === null ? props.login : props.name}</span>
        </div>
        <div className="profile-link">
          <span>Profile: </span>
          <a href={props?.html_url} target="_blank">{`@${props?.login}`}</a>
        </div>
      </div>
      <div className="join-date">Joined on: {props?.joinedDate}</div>
    </div>
  );
}
