import React from 'react';

const Output = ({md, text, elementId}) => {
  return (
    <div className='md-editor output-div' id={elementId} dangerouslySetInnerHTML={{__html: md.render(text)}} >
    </div>
  )
}

export default Output;