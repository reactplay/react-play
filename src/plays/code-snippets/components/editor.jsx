import React from 'react';
import Editor from '@monaco-editor/react';

const MEditor = ({ onChange, data }) => {
  return (
    <Editor
      defaultLanguage="javascript"
      defaultValue="// some comment"
      height="60vh"
      theme="vs-dark"
      value={data}
      onChange={onChange}
    />
  );
};

export default MEditor;
