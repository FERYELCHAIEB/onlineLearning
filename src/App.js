
import './css/App.css';

import React from 'react';

import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about/about';
import PageCours from './components/courses/pageCours';
import Equipe from './components/community/equipe';

import ContactForm from './components/Contacter/ContactForm';
import Footer from './components/footer/Footer';
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';
import Admin from './components/admin/admin';





function App() {
  return (
    <>
 
 <Router>
        
        <Switch>
      
        <Route  path='/' exact component={Home}/>
        <Route  path='/àpropos' exact component={About}/>
        <Route  path='/cours' exact component={PageCours}/>
        <Route  path='/communeauté' exact component={Equipe}/>
        <Route  path='/contact' exact component={ContactForm}/>
        <Route  path='/connexion' exact component={Login}/>
        <Route  path='/compte' exact component={SignUp}/>
        <Route  path='/admin' exact component={Admin}/>
        </Switch>
      <Footer/>
      </Router>

    </>
  );
}

export default App;
