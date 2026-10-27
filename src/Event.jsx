import { useState } from 'react';


function Event() {
  const [text, setText] = useState("");


  function handleClick() {
    alert("Konichiwa, minna san ");
  }


  function handleChange(e) {
    setText(e.target.value);
  }


  function handleClear() {
    setText("");
  }


  return (
    <div>
      {/* Click */}
      <button onClick={handleClick}>Alert</button>


      {/* onChange */}
      <input type="text" value={text} onChange={handleChange} />
      <h1>{text}</h1>


      <button onClick={handleClear}>ClearAll</button>
    </div>
  );
}


export default Event;


/**
 * Event handling in react is the process of responding to user interaction such as clicks, input changes and fom submission 
 * React provides a way to andle events using using event handlers which are fuctions that are called when a specific occurs 
 * Normal - js - click
 * React - js - onClick, onInput, onChange, onSubmit, onKeypress, onMouseover
*/
