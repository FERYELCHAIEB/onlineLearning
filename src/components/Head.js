import React from 'react'

import '../css/App.css'

import Button from 'react-bootstrap/Button';
import TextField from "@mui/material/TextField";
function Head (){
  return (
   <>
   
   <section className='head'>
   <div className='container flexSB'>
          <div className='logo'>
            <h1>WESS E-commerce</h1>
            <span>Etudier E-commerce en ligne</span>
          </div>
          </div>
          <div className="search">
     
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Que voulez-vous Apprendre?"
        />
     
     
    </div>

  

          <div className='connexion'>
        <Button  variant="secondary">Se connecter</Button> {' '}
        <Button  variant="outline-secondary" className='inscri'>S'inscrire</Button>
          </div>
   </section>
   
   </>
  )
}

export default Head
