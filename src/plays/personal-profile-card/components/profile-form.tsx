import React from 'react'

import ProfileType from '../types'

interface Props {
  value: ProfileType
  profile: ProfileType
  onChange: React.ChangeEventHandler
  onClick: () => void
  onUpload: React.ChangeEventHandler
  onClear: () => void
}

const ProfileForm = ({
  value,
  profile,
  onChange,
  onClick,
  onUpload,
  onClear,
}: Props) => {
  return (
    <div className="profilecard-profile-form md:mr-5">
      <div className="profilecard-profile-info">
        <input
          className="profilecard-cover-input mx-auto mr-0 relative top-[20px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] hover:cursor-pointer"
          type="file"
          name="cover"
          onChange={onUpload}
        />
        <img
          src={
            !value || !value.cover
              ? require("../images/placeholder_cover.jpg")
              : value.cover
          }
          className="w-full md:w-[600px] h-[150px] sm:h-[200px] rounded-3xl"
        />
        <input
          className="profilecard-dp-input mx-auto relative top-[-50px] sm:top-[-40px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] z-10 left-[50px] sm:left-[65px] hover:cursor-pointer"
          type="file"
          name="dp"
          onChange={onUpload}
        />
        <img
          src={
            !value || !value.dp
              ? require("../images/placeholder_profile.png")
              : value.dp
          }
          className="w-[110px] sm:w-[150px] h-[110px] sm:h-[150px] rounded-[50%] relative top-[-100px] mb-[-90px]  mx-auto"
        />
        <p className="mb-5 italic font-bold">*** Please use cover image size 730X270 for better quality</p>
        <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@your name"
          required
          onChange={onChange}
          value={value ? value.name : ""}
        />
        <textarea
          name="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2 placeholder-gray-400"
          placeholder="@your description"
          onChange={onChange}
          value={value ? value.description : ""}
        ></textarea>
      </div>
      <div className="profilecard-social-links">
        <input
          value={value ? value.facebook : ""}
          type="text"
          name="facebook"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@facebook handle"
          required
          onChange={onChange}
        />
        <input
          value={value ? value.twitter : ""}
          type="text"
          name="twitter"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@twitter handle"
          required
          onChange={onChange}
        />
        <input
          value={value ? value.instagram : ""}
          type="text"
          name="instagram"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@instagram handle"
          required
          onChange={onChange}
        />
        <input
          value={value ? value.github : ""}
          type="text"
          name="github"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@github handle"
          required
          onChange={onChange}
        />
        <input
          value={value ? value.linkedin : ""}
          type="text"
          name="linkedin"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          placeholder="@linkedin handle"
          required
          onChange={onChange}
        />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          onClick={onClick}
        >
          {profile === null ? "Save Profile Card" : "Update Profile Card"}
        </button>
        <button
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </div>
  )
}

export default ProfileForm
