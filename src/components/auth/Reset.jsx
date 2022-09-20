import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './auth.css'
export default class Reset extends Component {
  constructor(props){
    super(props);
    this.state={
    email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  

  handleSubmit(e){
    e.preventDefault();
    const {email} = this.state;
    console.log(email);
    fetch("http://localhost:5000/forgot-pass",{
      method:"POST",
      crossDomain:"true",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
       
        email,
        
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
  alert(data.status)
      
    })
  }
  
  
    render() {
    return (
      <>
      
      <section className="sign padding">
  <div className="containeeer">
     <form className='box' onSubmit={this.handleSubmit} >
     <div className="titre reset">
     <button type='reset'><Link to="/"><i className='fa fa-times'> </i></Link></button>
              <h2>Problèmes de connexion ?</h2>
                <h3>Entrez votre adresse e-mail et nous vous enverrons un lien pour récupérer votre compte.</h3>
            </div>
<br/>
       

        <div className="col-sm-9">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="exemple@exemple.com"
            required
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

   <br/>
        <div className="btn-group btn-group-lg col-lg-9">
          
          <button type="submit" className="btn btn-primary " >
           Envoyer un lien de connexion
          </button>
        
        </div>
        <br/> 
        <div className="ccompte">
         <p> vous n'avez pas encore un compte? <Link to="/register">S'inscrire</Link></p>
        </div>
      </form>
    </div>
    </section>
      
      
      </>
    )
  }
}
