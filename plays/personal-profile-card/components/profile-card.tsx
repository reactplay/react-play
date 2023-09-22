import React from 'react';
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter
} from 'react-icons/ai';
import ProfileType from '../types';
import placeholder_cover from '../images/placeholder_cover.jpg';
import placeholder_profile from '../images/placeholder_profile.png';

interface Props {
  profile: ProfileType;
}

const ProfileCard = ({ profile }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          alt="Cover"
          className="w-full md:w-[600px] h-32 sm:h-52 md:h-40 lg:h-52 rounded-t-[10px]"
          src={!profile || !profile.cover ? placeholder_cover : profile.cover}
        />
        <img
          alt="dp"
          className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-[50%] mt-[-50px] sm:mt-[-100px]"
          src={!profile || !profile.dp ? placeholder_profile : profile.dp}
        />
      </div>
      <div className="profilecard-profile-details">
        <h1 className="text-[28px] text-center font-bold px-[10px] pt-[20px] pb-[10px] text-[#FFE4E6]">
          {profile && profile.name ? profile.name : '@name'}
        </h1>
        <p className="text-[14px] text-center font-bold px-[10px] pt-0 pb-[10px] text-[#FFE4E6]">
          {profile && profile.description ? profile.description : 'description...........'}
        </p>
      </div>
      <div className="flex justify-center">
        {profile && profile.facebook && (
          <a href={`https://www.facebook.com/${profile.facebook}`} rel="noreferrer" target="_blank">
            <AiOutlineFacebook
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
              size="35"
            />
          </a>
        )}
        {profile && profile.twitter && (
          <a href={`https://twitter.com/${profile.twitter}`} rel="noreferrer" target="_blank">
            <AiOutlineTwitter
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
              size="35"
            />
          </a>
        )}
        {profile && profile.instagram && (
          <a
            href={`https://www.instagram.com/${profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
              size="35"
            />
          </a>
        )}
        {profile && profile.github && (
          <a href={`https://github.com/${profile.github}`} rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
              size="35"
            />
          </a>
        )}
        {profile && profile.linkedin && (
          <a href={`https://linkedin.com/${profile.linkedin}`} rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
              size="35"
            />
          </a>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
