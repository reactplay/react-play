import React from 'react'

const Paraphaser = ({resultparaphraser }) => {
  return (
     <div  style={{margin: '25px 25px'}} className='paraphaser'>
      {resultparaphraser.output} 
     </div>
  )
}

export default Paraphaser