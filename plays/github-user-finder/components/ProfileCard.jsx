import React from 'react';
import { useResultContext } from '../context/ResultContext';
import { formatDate } from '../../../common/utils/commonUtils';

const ProfileCard = () => {
  const { results } = useResultContext();

  return (
    <div className="profile-card m-auto p-8">
      {results.avatar_url ? (
        <img alt="User Image" className="avatar flex self-center" src={results.avatar_url} />
      ) : (
        <p />
      )}

      <h1 className="text-xl font-bold text-black name flex justify-center">{results.name}</h1>
      <h2 className="joined text-lg text-black">{formatDate(results.created_at)}</h2>
      <p className="para text-base">{results.bio}</p>
      <div className="data flex justify-around m-4 p-4">
        <div className="flex flex-col text-black font-bold text-lg">
          <p> Repo:</p>
          <p className="self-center">{results.public_repos}</p>
        </div>
        <div className="flex flex-col text-black font-bold text-lg">
          <p> Followers:</p>
          <p className="self-center">{results.followers}</p>
        </div>
        <div className="flex flex-col text-black font-bold text-lg">
          <p> Following:</p>
          <p className="self-center">{results.following}</p>
        </div>
      </div>
      <button className="btn">
        <a href={results.html_url} target="_blank">
          Go!
        </a>
      </button>
    </div>
  );
};

export default ProfileCard;
