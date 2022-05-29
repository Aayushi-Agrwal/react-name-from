import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [headingText1, setHeadingText1] = useState("");
  const [headingText2, setHeadingText2] = useState("");

  function handleChange1(event) {
    setFName(event.target.value);
  }

  function handleChange2(event) {
    setLName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText1(fName);
    setHeadingText2(lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {headingText1 + " " + headingText2}</h1>
        <input onChange={handleChange1} name="fName" placeholder="First Name" />
        <input onChange={handleChange2} name="lName" placeholder="Last Name" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
