import React from 'react'

export const Controler = ({animate, shapeChange, downloadBg, setContent}) => {
  return (
    <div className='controler' >
        <button onClick={animate}>Generate</button>
        <button onClick={shapeChange}>Circle | Square</button>
        <button onClick={downloadBg}>DownloadBg</button>
        <input type="text" onBlur={(event)=>setContent(event.target.value)} placeholder='type your name' />
    </div>
  )
} 
