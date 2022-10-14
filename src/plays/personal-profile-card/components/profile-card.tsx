import React from 'react'
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai'
import ProfileType from '../types'

interface Props {
  profile: ProfileType
}

const ProfileCard = ({ profile }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={
            !profile || !profile.cover
              ? require("../images/placeholder_cover.jpg")
              : profile.cover
          }
          alt="Cover"
          className="w-full md:w-[600px] h-32 sm:h-52 md:h-40 lg:h-52 rounded-t-[10px]"
        />
        <img
          src={
            !profile || !profile.dp
              ? require("../images/placeholder_profile.png")
              : profile.dp
          }
          alt="dp"
          className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-[50%] mt-[-50px] sm:mt-[-100px]"
        />
      </div>
      <div className="profilecard-profile-details">
        <h1 className="text-[28px] text-center font-bold px-[10px] pt-[20px] pb-[10px] text-[#FFE4E6]">
          {profile && profile.name ? profile.name : "@name"}
        </h1>
        <p className="text-[14px] text-center font-bold px-[10px] pt-0 pb-[10px] text-[#FFE4E6]">
          {profile && profile.description
            ? profile.description
            : "description..........."}
        </p>
      </div>
      <div className="flex justify-center">
        {profile && profile.facebook && (
          <a
            href={`https://www.facebook.com/${profile.facebook}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook
              size="35"
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
            />
          </a>
        )}
        {profile && profile.twitter && (
          <a
            href={`https://twitter.com/${profile.twitter}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter
              size="35"
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
            />
          </a>
        )}
        {profile && profile.instagram && (
          <a
            href={`https://www.instagram.com/${profile.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram
              size="35"
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
            />
          </a>
        )}
        {profile && profile.github && (
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub
              size="35"
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
            />
          </a>
        )}
        {profile && profile.linkedin && (
          <a
            href={`https://linkedin.com/${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              size="35"
              className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]"
            />
          </a>
        )}
      </div>
    </>
  )
}

export default ProfileCard
