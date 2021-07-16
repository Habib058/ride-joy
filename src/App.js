import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ="/home">
            <Home/>
          </Route>
          <Route path ="/signUp">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path ="/destination">
            <Destination/>
          </Route>
          <Route path ="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
