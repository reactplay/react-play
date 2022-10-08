import React, { useState, ChangeEvent, useEffect } from 'react'

import * as Storage from "./local-storage"
import ProfileType from './types'
import ProfileCard from './components/profile-card'
import ProfileForm from './components/profile-form'
import './index.css'

const PersonalProfileCard = () => {
  const [profileCard, setProfileCard] = useState<ProfileType>(null)
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
        <ProfileForm value={value} profile={profileCard} onChange={handleChange} onClick={handleClick} onUpload={handleUpload} onClear={handleClear} />
      </div>
      <div className="w-[100%] md:w-[50%] bg-[#19a2ae] px-5 py-5 rounded-[20px] max-h-[460px]">
        <ProfileCard profile={profileCard} />
      </div>
    </div>
  )
}

export default PersonalProfileCard