import { Button } from '@mui/material';
import { useUserId } from '@nhost/react';
import { socilsRegex } from 'common/const/socialsRegex';
import useGetContributorsDetails from 'common/hooks/useGetContributorDetails';

import { isEmpty } from 'lodash';
import LoadingSpinner from 'plays/dev-jokes/Spinner';
import React from 'react';

import { BsShare } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ContributorProfileMainContent from './ContributorProfileMainContent';
import './index.css';

export const UserProfile = () => {
  const userId = useUserId();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const {
    contributor,
    skills: skills_map,
    error,
    loading: dataLoading
  } = useGetContributorsDetails(id);

  const {
    resume_link,
    social_links,
    photo_link,
    bio,
    website,
    users_user_profile_map: { displayName, avatarUrl, email, plays } = {}
  } = contributor || {};

  const socials = () => {
    return Object.keys(socilsRegex).map((entry, index) => {
      const { regex, Icon } = socilsRegex[entry];
      const link = social_links?.find((link) => link.match(regex));
      if (!link) return null;
      return (
        <a key={index} href={link}>
          <Icon />
        </a>
      );
    });
  };

  const handleAddResume = () => {};

  if (dataLoading) return <LoadingSpinner />;
  if (isEmpty(contributor)) return <div>User not found</div>;
  return (
    <div className="app-body contributor_page ">
      <div className="left_section ">
        <img src={photo_link || avatarUrl} alt="avatar" className="rounded-full w-28 -mt-20" />
        <h2 className="text-lg font-bold"> {displayName}</h2>

        {/* show only if current login user same as user whose profile we are on */}
        {userId === id ? (
          <Button
            className="rounded-md flex gap-1 "
            onClick={() => {
              navigate(pathname + '/edit');
            }}
          >
            <FiEdit2 className="icon" /> Edit Profile
          </Button>
        ) : null}

        <Button className="rounded-md">
          <BsShare />
        </Button>
        <a href={email} className="flex gap-1 items-center">
          <MdEmail /> {email}
        </a>
        <div className="flex ">{socials()}</div>
        <p> {bio}</p>
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
        {!isEmpty(resume_link) ? (
          <a href={resume_link} target="_blank" rel="noreferrer">
            Resume
          </a>
        ) : (
          <button className="btn-default-light " onClick={handleAddResume}>
            Add resume
          </button>
        )}
        {skills_map?.map(({ skill_id_map, expert_level_id_map }) => (
          <div>
            {skill_id_map.label}: {expert_level_id_map.label}
          </div>
        ))}
      </div>

      <ContributorProfileMainContent plays={plays} />
    </div>
  );
};

// const tags = [],
//   languages = [],
//   levels = [];
// useEffect(() => {
//   plays?.forEach((play) => {
//     tags.push(...play.play_tags.map((tag) => tag.tag.name));
//     languages.push(play.language);
//     levels.push(play.level.name);
//   });
// }, []);
// console.log(tags, languages, levels);
