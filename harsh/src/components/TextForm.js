import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lowercse!!')
  };
  const handleClearClick = (event) => {
    console.log("on change");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter text here");

  return (
    <>
      <div
        className="container"
        
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey":"white"  ,
              color: props.mode === "dark" ? "white":"black"  ,
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>your text summary</h1>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
