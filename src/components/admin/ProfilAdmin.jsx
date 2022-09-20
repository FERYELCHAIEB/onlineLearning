import React, { Component } from 'react'
import Sidebar from '../../Sidebar/Sidebar';
import { Avatar, Paper, Typography } from "@material-ui/core";
import Styles from "./Profile.module.css";

import './admin.css'

import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
export default class ProfilAdmin extends Component {
  
  
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
      
    return (<>
    
    <div>
     <Sidebar/>
      
      <Container fluid className="mb-10">
        <Row>
          
        
          <Col md={12} className="">
            <Paper className="p-4  d-flex flex-column shadow boxe">
            <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
              <Typography className="my-3 tittre" variant="h5">
               Mes informations
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Username
              </Typography>
              <Typography variant="body1">
               {this.state.userInfo.nom} {this.state.userInfo.prenom}
              </Typography>
              <br />
           
              
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Email 
              </Typography>
              <Typography variant="body1">
              {this.state.userInfo.email}
              </Typography>
              <br/>
              <button className='btn btn-secondary'>Modifier</button>
            </Paper>

           
                
              

            
          </Col>
        </Row>
       
      </Container>
    </div>
  
        </>
    )
  }
}
