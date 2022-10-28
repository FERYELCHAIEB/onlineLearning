import React, { Component } from 'react'

import Cards from '../Cards/card';
import Sidebar from '../../Sidebar/Sidebar';

import CountUser from './user/CountUser';
import './admin.css'
export default class Admin extends Component {
  
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

  render(){
   
  return (<>
   <CountUser/>
   <Cards title="Espace Administrateur" />
  
   <Sidebar/>
   
 
    

    </>
  )
}
}