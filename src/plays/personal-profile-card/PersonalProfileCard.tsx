import PlayHeader from 'common/playlists/PlayHeader'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import useLocalStorage from '../../common/hooks/useLocalStorage'
import ProfileType from './types'
import ProfileCard from './components/profile-card'
import ProfileForm from './components/profile-form'
import './index.css'

const initialStateProfile = {
  name: '',
  description: '',
  dp: '',
  cover: '',
  facebook: '',
  twitter: '',
  instagram: '',
  github: '',
  linkedin: ''
}

const PersonalProfileCard = (props: any) => {
  const [localStoreProfile, setLocalStoreProfile] = useLocalStorage("profile_card", null);
  const [profileCard, setProfileCard] = useState<ProfileType>(initialStateProfile)
  const [value, setValue] = useState<ProfileType>(initialStateProfile)
  const [key, setKey] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>):void => {
    setValue((value: ProfileType) => {
      return { ...value, [e.target.name]: e.target.value }
    })
  }

  useEffect(() => {
    setProfileCard(localStoreProfile)
    localStoreProfile !== null && setValue(localStoreProfile)
  }, [key])

  const handleClick = () => {
    setKey(Math.random())
    setLocalStoreProfile(value)
  }

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files[0]
    if (files) {
      if(files.size > 102400) {
        toast.warn("Please upload image file size less than 100kb.");
      }else {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(files)
        const load = () => {
          setValue((value: ProfileType) => {
            return { ...value, [e.target.name]: fileReader.result }
          })
        }
        fileReader.addEventListener("load", load)
        return function cleanupListener() {
          window.removeEventListener("load", load)
        }    
      }
    }
  }

  const handleClear = () => {
    setKey(Math.random())
    localStorage.removeItem('profile_card')
    setValue(initialStateProfile)
    setProfileCard(initialStateProfile)
  }

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <div className="flex flex-col md:flex-row px-5 py-7">
        <div className="w-[100%] md:w-[50%] mb-8 md:mb-0">
          <ProfileForm value={value} profile={profileCard} onChange={handleChange} onClick={handleClick} onUpload={handleUpload} onClear={handleClear} />
        </div>
        <div className="w-[100%] md:w-[50%] bg-[#19a2ae] px-5 py-5 rounded-[20px] max-h-[460px]">
          <ProfileCard profile={profileCard} />
        </div>
      </div>
    </div>
  )
}

export default PersonalProfileCard