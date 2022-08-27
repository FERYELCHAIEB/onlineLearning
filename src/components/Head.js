import React from 'react'
import { Link } from "react-router-dom"
import '../css/App.css'

import Button from 'react-bootstrap/Button';
import TextField from "@mui/material/TextField";
function Head (){
  return (
   <>
   
   <section className='head'>
   <div className='container'>
          <div className='logo'>
            <h1>WESS E-commerce</h1><br/>
            <span>Etudier E-commerce en ligne</span>
          </div>
          <div className="search ">
     
     <TextField
       id="outlined-basic"
       variant="outlined"
       fullWidth
       label="Que voulez-vous Apprendre?"
     />
  
  
 </div>


 
       <div className='connexion '>
     <Button  variant="secondary"><Link to="/login">Se connecter</Link></Button> {' '}
     <Button  variant="outline-secondary" className='inscri'><Link to="/register">S'inscrire</Link></Button>
       </div>
          </div>

        
   </section>
   
   </>
  )
}

export default Head
