import React from 'react'
import Navbar from '../navbar'
import ContactFormulaire from './ContactFormulaire'
import Back from '../about/back'
import Footer from '../footer/Footer'
export default function ContactForm() {
 
 
   return(
    <>
    <Navbar/>
    <Back title='Contacter Nous'/>
    <ContactFormulaire/>
    <Footer/>
    </>
   )
}
