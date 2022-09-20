import React , {useRef}from 'react'
import '../Contacter/contact.css'
import emailjs from "@emailjs/browser"
import Title from '../title'
export default function ContactFormulaire() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cofyvyj', 'template_75ya8id', form.current, 'nklK_HcubBZDpMq6A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <>

   
        <section className='contact padding'>
          
        
      
            <div className="contain  flexSB ">
            <Title subtitle='contact' title='une remarque? une suggestion? nhésitez pas à nous écrire..' />
         <form ref={form} onSubmit={sendEmail}>
           
        <label>Nom complet </label>
        <input type="text" name="user_name" placeholder='taper votre nom'/>
      
       
        <label>Email </label>
        <input type="email" name="user_email"  placeholder='saisir votre email'/>
      
       
        <label>Message </label>
        <textarea name="message"  placeholder='taper votre message'/>
      <br/>
       
       <button type='submit' className='btnSubmit'>Confirmer</button>
     
      </form>
     
      </div>
      </section>
      </>
    );
}
