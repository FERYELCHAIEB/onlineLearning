import React from 'react'
import Back from './back';
import Navbar from '../navbar'
import SectionAbout from './sectionAbout';
import Footer from '../footer/Footer';
function About() {
  return (
    <>
    <Navbar/>
    <Back title='À propos de nous'/>
    <SectionAbout/>
    <Footer/>
    </>
  )
}
export default  About;