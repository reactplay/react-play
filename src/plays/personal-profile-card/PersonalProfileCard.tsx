import React, { useState, ChangeEvent, useEffect } from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'

import * as Storage from "./local-storage"
import './index.css'

const PersonalProfileCard = () => {
  const [profileCard, setProfileCard] = useState(null)
  const [value, setValue] = useState(null)
  const [key, setKey] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void => {
    setValue((value: Object) => {
      return { ...value, [e.target.name]: e.target.value }
    })
  }

  useEffect(() => {
    setProfileCard(Storage.get('profile_card'))
    Storage.get('profile_card') !== null && setValue(Storage.get('profile_card'))
  }, [key])

  const handleClick = () => {
    setKey(Math.random())
    Storage.set('profile_card', value)
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files[0]
    if (files) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(files)
      fileReader.addEventListener("load", function () {
        setValue((value: Object) => {
          return { ...value, [e.target.name]: this.result }
        })
      })    
    }
  }

  const handleClear = () => {
    setKey(Math.random())
    Storage.remove('profile_card')
    setValue(null)
    setProfileCard(null)
  }

  return (
    <div className="flex flex-col md:flex-row px-5 py-7">
      <div className="w-[100%] md:w-[50%] mb-8 md:mb-0">
        <div className="profile-form md:mr-5">
          <div className="profile-info">
            <input className="cover-input mx-auto mr-0 relative top-[20px] mt-[-20px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f]" type="file" name="cover" onChange={handleUpload} />
            <img src={!value || !value.cover ? require("./images/placeholder_cover.jpg") : value.cover} className="w-full md:w-[600px] h-[150px] sm:h-[200px] rounded-3xl" />
            <input className="dp-input mx-auto relative top-[-50px] sm:top-[-40px] h-[30px] sm:h-[40px] w-[30px] sm:w-[40px] rounded-full flex bg-[#45576f] z-10 left-[50px] sm:left-[65px]" type="file" name="dp" onChange={handleUpload} />
            <img src={!value || !value.dp ? require("./images/placeholder_profile.png") : value.dp} className="w-[110px] sm:w-[150px] h-[110px] sm:h-[150px] rounded-[50%] relative top-[-100px] mb-[-75px]  mx-auto" />
            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@your name" required onChange={handleChange} value={value ? value.name : ''}/>
            <textarea name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2 placeholder-gray-400" placeholder="@your description" onChange={handleChange} value={value ? value.description : ''}>
            </textarea>
          </div>
          <div className="social-links">
            <input value={value ? value.facebook : ''} type="text" name="facebook" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@facebook handle" required onChange={handleChange}/>
            <input value={value ? value.twitter : ''} type="text" name="twitter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@twitter handle" required onChange={handleChange}/>
            <input value={value ? value.instagram : ''} type="text" name="instagram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@instagram handle" required onChange={handleChange}/>
            <input value={value ? value.github : ''} type="text" name="github" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@github handle" required onChange={handleChange}/>
            <input value={value ? value.linkedin : ''} type="text" name="linkedin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" placeholder="@linkedin handle" required onChange={handleChange}/>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" onClick={handleClick}>{profileCard === null ? 'Save Profile Card' : 'Update Profile Card'}</button>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" disabled={profileCard === null && true } onClick={handleClear}>Clear</button>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] bg-[#45576f] px-5 py-7 rounded-[20px] max-h-[460px]">
        <div className="flex flex-col justify-center items-center">
          <img src={!profileCard || !profileCard.cover ? require("./images/placeholder_cover.jpg") : profileCard.cover } alt="Cover" className="w-[600px] h-32 sm:h-44" />
          <img src={!profileCard || !profileCard.dp ? require("./images/placeholder_profile.png") : profileCard.dp } alt="dp" className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-[50%] mt-[-50px] sm:mt-[-100px]" />
        </div>
        <div className="profile-details">
          <h1 className="text-[28px] text-center font-bold px-[10px] pt-[20px] pb-[10px] text-[#FFE4E6]">{profileCard && profileCard.name ? profileCard.name : '@name'}</h1>
          <p className="text-[14px] text-center font-bold px-[10px] pt-0 pb-[10px] text-[#FFE4E6]">{profileCard && profileCard.description ? profileCard.description : 'description...........'}</p>
        </div>
        <div className="flex justify-center">
          {profileCard && profileCard.facebook &&
            <a href={`https://www.facebook.com/${profileCard.facebook}`} target="_blank" rel="noreferrer">
              <AiOutlineFacebook size="35" className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]" />
            </a>
          }
          {profileCard && profileCard.twitter &&
            <a href={`https://twitter.com/${profileCard.twitter}`} target="_blank" rel="noreferrer">
              <AiOutlineTwitter size="35" className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]" />
            </a>
          }
          {profileCard && profileCard.instagram &&
            <a href={`https://www.instagram.com/${profileCard.instagram}`} target="_blank" rel="noreferrer">
              <AiOutlineInstagram size="35" className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]" />
            </a>
          }
          {profileCard && profileCard.github &&
            <a href={`https://github.com/${profileCard.github}`} target="_blank" rel="noreferrer">
              <AiOutlineGithub size="35" className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]" />
            </a>
          }
          {profileCard && profileCard.linkedin &&
            <a href={`https://linkedin.com/${profileCard.linkedin}`} target="_blank" rel="noreferrer">
              <AiOutlineLinkedin size="35" className="text-[#CFFAFE] mx-[5px] my-0 hover:color-[#76e8f5]" />
            </a>
          }
        </div>
      </div>
    </div>
  )
}

export default PersonalProfileCard