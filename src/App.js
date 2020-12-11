import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Index from "./components/index";
import Welcome from "./components/welcome";

// sick dude
function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
              <Route path="/welcome/:id" component={Welcome} />
              <Route path="/" component={Index}/>
            </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
