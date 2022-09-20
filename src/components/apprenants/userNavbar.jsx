import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './apprenant.css'
import Dropdown from 'react-bootstrap/Dropdown';
export default class UserNavbar extends Component {
    constructor(props){
        super(props);
        this.state={
          userInfo:"",
        };
          }
          
          
          componentDidMount(){
            fetch("http://localhost:5000/userInfo",{
              method:"POST",
              crossDomain:"true",
              headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
              },
              body:JSON.stringify({
                token: window.localStorage.getItem("token"),
              }),
            }).then((res)=>res.json())
            .then((data)=>{
              console.log(data,"userInfo");
              this.setState({ userInfo:data.data })
            })
          }
    
      
      
      render() {
        return (
          <>
          
          < header className='header'> 
          <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
       
        <ul className="nav navbar-nav navbar-left">
          <li className="active"><a href="profil">WESS E-COMMERCE</a></li>
          <li><a href="#">Mon apprentissage</a></li>
          <li><a href="#">Cours</a></li>
        </ul>
    
        
      
      </div>
      <Dropdown className='drop'>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
          <span><i class="fa-solid fa-user-astronaut"></i> {this.state.userInfo.prenom}.{this.state.userInfo.nom}</span>
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item ><Link to="/profil-user"><i class="fa-solid fa-circle-user"></i> Profil</Link></Dropdown.Item>
            <Dropdown.Item ><Link to="/logout"><i class="fa-solid fa-gear"></i> Paramétres</Link></Dropdown.Item>
            
            <Dropdown.Item ><Link to="/logout"><i class="fa-solid fa-circle-question"></i> Aide</Link></Dropdown.Item>
            <Dropdown.Item ><Link to="/logout"><i class="fa-solid fa-right-from-bracket"></i> Déconnexion</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </nav>
      </header>
     
     
          </>
        )
      }
    }
    