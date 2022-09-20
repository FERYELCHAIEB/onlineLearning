import React, { Component } from 'react'
import './auth.css'
import { Link } from 'react-router-dom'

 


export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      nom:"",
      prenom:"",
      email:"",
      pass:""
    };
    this.handleSubmit =this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    const {nom,prenom,email,pass} = this.state;
    console.log(nom,prenom,email,pass);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:"true",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        nom,prenom,
        email,
        pass
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      if(data.status==='succés de creation'){
        alert("compte créée avec succés");
        window.location.href='/login';
      }
      
    })
  }
  


  render(){
 
  return (
    <>
      <section className="sign padding">
  <div className="containeer">
     <form  onSubmit={this.handleSubmit} >
     <div className="titre">
     <button type='reset'><Link to="/"><i className='fa fa-times'> </i></Link></button>
                <h2>S'inscrire</h2>
                <h3>Remplissez les informations ci-dessous pour créer un compte </h3>
            </div>
<br/>
        <div className="col-sm-9">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            required
            onChange={(e)=>this.setState({nom:e.target.value})}
          />
        </div>

        <div className="col-sm-9">
          <label>Prénom</label>
          <input type="text" className="form-control" placeholder="Prénom"  required onChange={(e)=>this.setState({prenom:e.target.value})} />
        </div>

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

        <div className="col-sm-9">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="minimum 8 caractéres"
            required
            minlength="8"
            onChange={(e)=>this.setState({pass:e.target.value})}
          />
        </div>
<br/>
        <div className="btn-group btn-group-lg col-lg-9">
          
          <button type="submit" className="btn btn-primary " >
            Créer un compte
          </button>
        </div>
        <br/>
        <p className="compte">
          vous avez déjà un compte?<a href="/login">connexion</a>
        </p>
      </form>
    </div>
    </section>

  
    </>
  )
}

}
