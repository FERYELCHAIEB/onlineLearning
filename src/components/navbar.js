import React, { useState } from 'react'
import Head from './Head'
import { Link } from "react-router-dom"
import '../css/App.css'
 function Navbar() {
  
  const [click, setClick] = useState(false )
  return (
  <>
  <Head/>
  < header>
   <nav className='flexSB'>
    <ul className={click ? "mobile-nav" : "flexSB " } onClick={()=>setClick(false)}>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/àpropos">À propos</Link></li>
        <li><Link to="/cours">Cours</Link></li>
       
        <li><Link to="/communeauté">Communeauté</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <div className='start'>
            <div className='button'>Explorer</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
          {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
    </nav>
  </header>
  </>
  )
}

export default Navbar;