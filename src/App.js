import React, { useState } from "react";
import "./App.css";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Welcome from "./components/welcome";
import Bridge from "./components/bridge";
import Hi from "./components/hi";
import Home from "./components/home";
import HomeDetail from "./components/homeDetail";

// sick dude
function App() {

  const [active, setActive] = useState(false);

  const codeString = `
    <Bridge request={{
      data: ["email", "name"],
      appName: "mango",
      appID: "222"
      }}>
      <Hi />
    </Bridge>`

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
              <Route path="/home/:id" component={HomeDetail} />
              <Route path="/home" component={Home} />
              <Route path="/welcome/:id" component={Welcome} />
              
              <Route path="/">
                <>
                {active ? 
                  <Bridge request={{
                    data: ["email", "name"],
                    appName: "mango",
                    appID: "222"
                  }}>
                    <Hi />
                  </Bridge>
                : 
                <>
                <button style={{
                  border: "none",
                  backgroundColor:"white",
                  color: "#282c34",
                  padding: "10px",
                  borderRadius:"5px",
                  width:"70px",
                  cursor:"pointer",
                  position:"absolute",
                  top:"10px",
                  right:"10px"
                  }} onClick={() => setActive(true)}>App</button> 
                  
                  <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                      {codeString}
                  </SyntaxHighlighter>
                  </>
                  
                  }

                  
                
                <p style={{position:"absolute", bottom:"0px", fontSize:"16px"}}><a href="https://twitter.com/esotterik" target="blank">@esotterik</a></p>
                
                </>
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;