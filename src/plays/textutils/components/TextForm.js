import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Lowercase was clicked!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleSentenceClick = () => {
    let newText = text.toLowerCase().split(" ");
    for (var i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    newText = newText.join(" ");
    setText(newText);
    props.showAlert("Converted to Sentencecase", "success");
  };
  const handleClearClick = () => {
    if (window.confirm("Do you want to delete the text")) {
      let newText = "";
      setText(newText);
      props.showAlert("Text has been cleared", "success");
    }
  };
  const handleSpeakClick = (event) => {
    let el = event.currentTarget;
    if (el.innerHTML === "Listen Now") el.innerHTML = "Stop Now";
    else el.innerHTML = "Listen Now";

    // el.innerHTML has already been changed here, hence checking for the opposite value
    if (el.innerHTML === "Stop Now") {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    } else {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.cancel(msg);
    }
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard", "success");
  };
  const handleRemoveWhiteSpaceClick = () => {
    let res = "";
    for (let i = 0; i < text.length - 1; i++) {
      if (text[i] === " " && text[i + 1] === " ") continue;
      else res += text[i];
    }
    if (text[text.length - 1] !== " ") res += text[text.length - 1];
    //console.log(res);
    setText(res);
    props.showAlert("White space removed", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  //To extract the words from the text.
  const handletextExtract = () => {
    const letters = text.match(/[a-z]|[A-Z]/g);
    if (letters !== null) {
      const res1 = letters.join("");
      setText(res1);
      props.showAlert("Extracted the words from the text", "success");
    } else {
      props.showAlert("No words found in the text", "warning");
    }
  };
  //To extract the number from the text.
  const handleNumExtract = () => {
    const digits = text.match(/[0-9]/g);
    if (digits != null) {
      const res = digits.join("");
      setText(res);
      props.showAlert("Extracted the Numbers from the text", "success");
    } else {
      props.showAlert("No number found", "warning");
    }
  };

  // const handleLinkExtract = () => {
  //   const link = text.match(
  //     /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim
  //   );

  //   if (link != null) {
  //     const res = link.join("");
  //     setText(res);
  //     props.showAlert("Extracted the Links from the text", "success");
  //   } else {
  //     props.showAlert("No link found", "warning");
  //   }
  // };

  const [text, setText] = useState("");
  // text="new text" // Wrong way to change the state
  // setText("new text") // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSentenceClick}
        >
          Convert to Sentencecase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleNumExtract}
        >
          Extract Numbers
        </button>
        {/* <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLinkExtract}
        >
          Extract Links
        </button> */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handletextExtract}
        >
          Extract Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpeakClick}
        >
          Listen Now
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveWhiteSpaceClick}
        >
          Remove White Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy to Clipboard
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.length > 0 ? text.trim().split(/\s+/).length : 0} words,{" "}
          {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!!"}</p>
      </div>
    </>
  );
}
