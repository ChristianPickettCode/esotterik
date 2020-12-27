import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Welcome from "./components/welcome";
import Bridge from "@esotterik/bridge-library";
import Home from "./components/home";
import HomeDetail from "./components/homeDetail";
import Landing from "./components/landing";

// sick dude
function App() {

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
                  <Bridge request={{
                      data: ["email", "name"],
                      appName: "Esotterik",
                      appID: "1206e5f5-dd4f-437d-8869-81da01b705c6"
                    }}>
                      <Landing />
                  </Bridge>

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