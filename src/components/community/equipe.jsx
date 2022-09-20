import React from 'react'
import Back from '../about/back'
import Navbar from '../navbar'
import Footer from '../footer/Footer'
import SectionEquipe from './SectionEquipe'
function Equipe() {
  return (
    <>
<Navbar/>
     <Back title='Notre équipe' />
     <section className="equipe padding">
       <div className="container grid">
        <SectionEquipe/>
        </div>  
     </section>
   <Footer/>
    </>
  )
}
export default Equipe