import React from "react";
import "./App.css";

import Atlis from "atlis";
import Landing from "./components/landing";

// sick dude
function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Atlis request={{
              data: ["email", "name"],
              appName: "Esotterik",
              appID: "1206e5f5-dd4f-437d-8869-81da01b705c6"
            }}>
              <Landing />
          </Atlis>
          <p style={{position:"absolute", bottom:"0px", fontSize:"16px"}}><a href="https://twitter.com/esotterik" target="blank">@esotterik</a></p>

        </header>
      </div>
    
  );
}

export default App;