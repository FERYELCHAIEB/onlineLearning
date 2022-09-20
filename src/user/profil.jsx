import React, { Component } from 'react'
import UserNavbar from '../components/apprenants/userNavbar';
import '../components/apprenants/apprenant.css'
import Cards from '../components/Cards/card'
import Footer from '../components/footer/Footer'
import SideCalender from '../components/SideCalendar';
export default class Profil extends Component {
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


    <UserNavbar/>
    <div className="tittle">
    <Cards title='Content de vous voir de nouveau 🤩' />
    </div>
<div className='calender'>
    <SideCalender/>
    </div>
      <div className="marigin"></div>
      <Footer/>
    </>
      
    )
  }
}
