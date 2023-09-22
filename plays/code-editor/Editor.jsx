import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/material.css';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/night.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';

const Editor = ({ language, value, setEditorState }) => {
  const [theme, setTheme] = useState('dracula');
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };

  const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night'];

  return (
    <div className="code-editor-container">
      <div className="code-editor-dropdown">
        <label htmlFor="cars">Choose a theme: </label>
        <select
          name="theme"
          onChange={(el) => {
            setTheme(el.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option value={theme}>{theme}</option>
          ))}
        </select>
      </div>
      <div className="code-editor-cont">
        <ControlledEditorComponent
          className="Codemirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: theme
          }}
          value={value}
          onBeforeChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Editor;
