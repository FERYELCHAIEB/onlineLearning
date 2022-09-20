
import React ,{ Component }from 'react'

import { Link } from 'react-router-dom'

import './auth.css'

export default class Login extends Component {
 
 
  constructor(props){
    super(props);
    this.state={
      email:"",
      pass:""
    }
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    const {email,pass} = this.state;
    console.log(email,pass);
    fetch("http://localhost:5000/login",{
      method:"POST",
      crossDomain:"true",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
       
        email,
        pass
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      if(data.status=='ok'){
        alert("login avec succés");
        window.localStorage.setItem("token",data.data);
        if(data.userRole=="admin"){
          window.location.href='/admin'
        }
        else  if(data.userRole=="teacher"){
          window.location.href='/teacher'
        }
      else  window.location.href='/profil';
      }
    })}


  render(){
 
  return (
    <>
   
    <section className="login padding">
  <div className="containeer">
        
 
        <form  onSubmit={this.handleSubmit}>
            <div className="titre">
              
            <button type='reset'><Link to="/"><i className='fa fa-times'> </i></Link></button>
            
                <h2>Connexion</h2>
                <h3>connectez-vous pour continuer à apprendre</h3>
                
            </div>
            <br/>
        <div className="col-sm-9">
          <label> Email</label>
          <input
            type="email"
            className="form-control"
            required
            placeholder="Saisir votre email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="col-sm-9">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            required
            placeholder="Saisir votre mot de passe"
            onChange={(e)=>this.setState({pass:e.target.value})}
          />
        </div>
<br/>
        

        <div className="btn-group btn-group-lg col-lg-9">
          <button type="submit" className="btn btn-primary">
           Se connecter
          </button>
          
        </div>

      <br/>
      
        <div className="forgot-password">
         <p>  <Link to="/reset">Mot de passe oublié?</Link></p>
        </div>
       
      </form>
      </div>
      </section>
   
    </>
  )
}
}