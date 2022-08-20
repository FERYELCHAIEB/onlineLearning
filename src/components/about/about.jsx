import React from 'react'
import Back from './back';
import Navbar from '../navbar'
import SectionAbout from './sectionAbout';
function About() {
  return (
    <>
    <Navbar/>
    <Back title='À propos de nous'/>
    <SectionAbout/>
    </>
  )
}
export default  About;