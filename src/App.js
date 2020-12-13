import React, { useState } from "react";
import "./App.css";

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

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
              <Route path="/home/:id" component={HomeDetail} />
              <Route path="/home" component={Home} />
              <Route path="/welcome/:id" component={Welcome} />
              
              <Route path="/">

                {active ? 
                  <Bridge request={{
                    data: ["email", "name"],
                    appName: "mango",
                    appID: "222"
                  }}>
                    <Hi />
                  </Bridge>
                : 
                
                <button style={{
                  border: "none",
                  backgroundColor:"white",
                  color: "#282c34",
                  padding: "10px",
                  borderRadius:"5px",
                  width:"70px",
                  cursor:"pointer"
                  }} onClick={() => setActive(true)}>App</button> }
                
                

              </Route>
            </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;