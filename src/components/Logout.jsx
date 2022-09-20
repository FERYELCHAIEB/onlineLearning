import React, { Component } from 'react'

export default class Logout extends Component {
 componentDidMount(){
 fetch("http://localhost:5000/logout",{
    method:"GET",
    crossDomain:"true",
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      token: window.localStorage.removeItem("token"),
    }),
  }).then(window.location.href='/')
 
}
    render() {
    return (
      <div></div>
    )
  }
}
