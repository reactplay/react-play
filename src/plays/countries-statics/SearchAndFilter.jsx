import React, { useState } from 'react' 
import { BsSearch } from "react-icons/bs";
import "./countriesStatistic.css"
import MapData  from "./featues.json"

const SearchAndFilter = () => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const SearchResult = MapData.objects.world.geometries.filter(o=>o.properties.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 10)
  
  const handleOnKeyDown = (e)=>{
    if(e.keyCode === 27){
      setShowSuggestions(false)
      e.currentTarget.blur()
    }
  }
  const handleOnchange=(e)=>{
    setSearchQuery(e.target.value)
  }
  const handleOnFocus=()=>{
   setShowSuggestions(true)
  }
  const handleOnBlur =()=>{
    setShowSuggestions(false)
  }
  return (
    <div className="w-full max-w-[550px] mx-auto flex justify-center" >
      <div className='relative w-full'>
       <input type="text" className='geo-now-searchbar w-full rounded-lg bg-inherit' placeholder='Enter the country...' 
       value={searchQuery}
       onChange={(e)=>handleOnchange(e)}
       onFocus={handleOnFocus}
       onBlur={handleOnBlur}
       onKeyDown={(e)=>handleOnKeyDown(e)}
       /> 
       <div className='absolute top-[50%] translate-y-[-50%] right-0  w-[30px] h-[30px] mx-2 bg-cyan-500 cursor-pointer'>
        <BsSearch className='absolute top-1 left-1 text-2xl text-white' /></div>
        {showSuggestions && 
        <div className='absolute w-full bg-white p-4'>
          {SearchResult.map((country)=>{
            return <div className='border-b cursor-pointer hover:bg-cyan-100'>{country.properties.name}</div>
          })}
        </div>
          }
      </div>
      
    </div>
  )
}

export default SearchAndFilter
