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
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMacth/NoMatch';

export const userContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
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
          <PrivateRoute path ="/destination/:id">
            <Destination/>
          </PrivateRoute>
          <Route path ="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ='*'>
            <NoMatch/>
          </Route>

        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
