import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Blogpost from './pages/Blogpost'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route component={Blogpost} path="/blogpost" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
