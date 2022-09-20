import React from 'react'
import Back from '../about/back'
import Cours from './cours'
import Navbar from '../navbar'
import SectionCours from './SectionCours'
import Footer from '../footer/Footer'
 function PageCours() {
  return (
    <>
<Navbar/>
    <Back title='Découvrir nos cours'/>
    <SectionCours/>
    <Cours/>
    <Footer/>
    </>
  )
}

export default PageCours