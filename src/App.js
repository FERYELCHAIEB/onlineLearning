
import './css/App.css';

import React from 'react';

import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about';


function App() {
  return (
    <>
 
 <Router>
        <Navbar/>
        <Switch>
        <Route  path='/' exact component={Home}/>
        <Route  path='/about' exact component={About}/>

      
        </Switch>
 
      </Router>

    </>
  );
}

export default App;
