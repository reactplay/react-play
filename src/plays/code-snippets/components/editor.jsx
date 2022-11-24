import React from 'react'
import Editor from '@monaco-editor/react';

const MEditor = ({onChange, data}) => {
  return (
    <Editor
     height="60vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
     onChange={onChange}
     value={data}
     theme="vs-dark"
   />
  )
}

export default MEditor