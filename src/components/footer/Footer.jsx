import React from 'react'
import './footer.css'
 function Footer() {
  return (
    <>
    <section className='newletter'>
        <div className="container flexSB">
          <div >
            <h1 >
             Newsletter -Rester connecté pour savoir plus 
            </h1>
            <br/>
            <span>
             Abonnez-vous à notre newletter  
            </span>
            </div>   
            <div >
            <input type="text" placeholder='Taper votre @email' />
                <i className='fa fa-paper-plane'></i>
            </div>
        </div>
    </section>

    <footer>
        <div className="container padding">
        <div className='box logo'>
            <h1>WESS E-commerce</h1><br/>
            <span>Etudier E-commerce en ligne</span>
            <p>vous pouvez nous suivre sur les liens suivants</p>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
<div className="box link">
    <h3>Explorer</h3>
    <ul>
        <li>À propos</li>
        <li>Cours</li>
        <li>Communeuté</li>
        <li>Contact</li>
    </ul>
</div> 
<div className="box last">
    <h3>Avez vous une question ?</h3>
    <ul>
        <li> <i className='fa fa-paper-plane'></i> contact@wissemoueslati.com</li>
        <li> <i className='fa fa-phone-alt'></i> +216 97 334 972</li>
    </ul>
</div>
        </div>
    </footer>

<div className="legal">
    <p>copyright @2022 tous les droits sont réservés</p>
</div>

    </>
  )
}
export default  Footer