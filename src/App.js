import './App.css';
import React, { useState } from "react";

// sick dude
function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
          <a href="https://twitter.com/esotterik">{toggle ? "ha.": "esotterik."}</a>
        </p>
      </header>
    </div>
  );
}

export default App;
