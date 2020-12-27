import React, { useEffect, useState } from "react";
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
      appName: "apple",
      appID: "123"
      }}>
      <App />
    </Bridge>`

    useEffect(() => {
      if(localStorage.getItem("user")) {
        setActive(true);
      }
    }, [])

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
                  { active ? 
                    <Bridge request={{
                      data: ["email", "name"],
                      appName: "Esotterik",
                      appID: "1206e5f5-dd4f-437d-8869-81da01b705c6"
                    }}>
                      <Hi />
                    </Bridge>
                  : 
                  <>
                    <button style={{
                      border: "none",
                      backgroundColor:"white",
                      color: "rgb(30, 30, 30)",
                      padding: "10px",
                      borderRadius:"5px",
                      width:"70px",
                      cursor:"pointer",
                      position:"absolute",
                      top:"10px",
                      right:"10px",
                      fontSize:"14px",
                      fontWeight:"bold"
                      }} onClick={() => setActive(true)}>App</button> 
                      
                      <div style={{ display: "flex", flexDirection:"row"}}>
                        <div style={{width:"40%", marginRight:"5%", marginLeft:"5%"}}>
                          <p>simple authentication react framework.</p>
                        </div>
                        <div style={{width:"50%", border:"5px solid white", borderRadius:"15px", marginRight:"2.5%"}}>
                          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                              {codeString}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                      
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