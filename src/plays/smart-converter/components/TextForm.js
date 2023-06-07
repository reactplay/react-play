import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase!', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed!', 'success');
  };
  // To extract the words from the text.
  const handletextExtract = () => {
    const words = text.match(/[a-zA-Z]+/g);
    if (words !== null) {
      const res = words.join(' ');
      setText(res);
      props.showAlert('Extracted the words from the text', 'success');
    } else {
      props.showAlert('No words found in the text', 'warning');
    }
  };
  // To extract the number from the text.
  const handleNumExtract = () => {
    const digits = text.match(/[0-9]/g);
    if (digits != null) {
      const res = digits.join(' ');
      setText(res);
      props.showAlert('Extracted the Numbers from the text', 'success');
    } else {
      props.showAlert('No number found', 'warning');
    }
  };

  // To Reverse Text
  function handleRevClick() {
    if (text.length > 0) {
      setText(text.split(' ').reverse().join(''));
      props.showAlert('Reversed Text', 'success');
    } else {
      props.showAlert('No text to reverse', 'warning');
    }
  }
  const [text, setText] = useState('');

  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="Smart-converter-textformbox">
        <h1 className="Smart-converter-Heading">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="Smart-converter-textarea"
            id="Smart-converter-myBox-textarea"
            rows="8"
            value={text}
            onChange={handleOnChange}
          />
        </div>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handletextExtract}
        >
          Extract Text
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleNumExtract}
        >
          Extract Number
        </button>
        <button
          className="Smart-converter-btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleRevClick}
        >
          Reverse Text
        </button>
      </div>
      <div className="my-3">
        <h2 className="Smart-converter-Header2">Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{' '}
          Minutes read
        </p>
        <h2 className="Smart-converter-Header2">Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}
