import React from 'react';

import ProfileType from '../types';
import placeholder_cover from '../images/placeholder_cover.jpg';
import placeholder_profile from '../images/placeholder_profile.png';

interface Props {
  value: ProfileType;
  profile: ProfileType;
  onChange: React.ChangeEventHandler;
  onClick: () => void;
  onUpload: React.ChangeEventHandler;
  onClear: () => void;
}

const ProfileForm = ({ value, profile, onChange, onClick, onUpload, onClear }: Props) => {
  return (
    <div className="profilecard-profile-form md:mr-5">
      <div className="profilecard-profile-info">
        <input
          accept="image/*"
          className="profilecard-cover-input mx-auto mr-0 relative top-[20px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] hover:cursor-pointer"
          name="cover"
          type="file"
          onChange={onUpload}
        />
        <img
          alt={value.cover === '' ? 'placeholder cover' : 'cover'}
          className="w-full md:w-[600px] h-[150px] sm:h-[200px] rounded-3xl"
          src={value.cover === '' ? placeholder_cover : value.cover}
        />
        <input
          accept="image/*"
          className="profilecard-dp-input mx-auto relative top-[-50px] sm:top-[-40px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] z-10 left-[50px] sm:left-[65px] hover:cursor-pointer"
          name="dp"
          type="file"
          onChange={onUpload}
        />
        <img
          alt={value.dp === '' ? 'placeholder display picture' : 'display picture'}
          className="w-[110px] sm:w-[150px] h-[110px] sm:h-[150px] rounded-[50%] relative top-[-100px] mb-[-90px]  mx-auto"
          src={value.dp === '' ? placeholder_profile : value.dp}
        />
        <p className="mb-5 italic font-bold">
          *** Please use cover image size 730X270 for better quality
        </p>
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="name"
          placeholder="@your name"
          type="text"
          value={value.name}
          onChange={onChange}
        />
        <textarea
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2 placeholder-gray-400"
          name="description"
          placeholder="@your description"
          rows={4}
          value={value.description}
          onChange={onChange}
        />
      </div>
      <div className="profilecard-social-links">
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="facebook"
          placeholder="@facebook handle"
          type="text"
          value={value.facebook}
          onChange={onChange}
        />
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="twitter"
          placeholder="@twitter handle"
          type="text"
          value={value.twitter}
          onChange={onChange}
        />
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="instagram"
          placeholder="@instagram handle"
          type="text"
          value={value.instagram}
          onChange={onChange}
        />
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="github"
          placeholder="@github handle"
          type="text"
          value={value.github}
          onChange={onChange}
        />
        <input
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
          name="linkedin"
          placeholder="@linkedin handle"
          type="text"
          value={value.linkedin}
          onChange={onChange}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          type="button"
          onClick={onClick}
        >
          {profile === null ? 'Save Profile Card' : 'Update Profile Card'}
        </button>
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          type="button"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
