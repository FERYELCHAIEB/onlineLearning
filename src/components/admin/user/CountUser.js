import React, { Component } from 'react'
import axios from 'axios';
import '../admin.css'
export default class CountUser extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
        count: []
        }
       
        }
    countData=()=>{
        axios.get('http://localhost:5000/count-users')
        .then((response) => {
        console.log(response);
        this.setState({
        count: response.data
        });
        })
        .catch((error) => {
        console.log(error);
        })
    
      }
      componentDidMount=()=>{
       
        this.countData();
      }
  render() {
    const {count} = this.state;
    return (<>
      
         <div className='conteneeur '>
         {
             count && count.map((nb)=>{
                return (<>
                <div className='row'>
                <div class="col-lg-3">
                <div class="card bg-info " style={{ width: '18rem'}}>
                        <div class="card-body cardy " >
                        <i class="fa-solid fa-users"></i> <span>Total Utilisateurs </span> {nb.all}
                         </div>
                        </div>
                        </div>

                        <div class="col-lg-3">
                        <div class="card bg-warning " style={{ width: '18rem' }}>
                        <div class="card-body cardy ">
                        <i class="fa-solid fa-users-line"></i> <span>Total Apprenants </span> {nb.student}
                         </div>
                        </div>
                        </div>

                        <div class="col-lg-3">
                        <div class="card bg-success " style={{ width: '18rem' }}>
                        <div class="card-body cardy ">
                        <i class="fa-solid fa-users-between-lines"></i> <span>Total Formateurs </span> {nb.teacher}
                         </div>
                        </div>
                        </div>
                        <div class="col-lg-3">
                        <div class="card bg-danger " style={{ width: '18rem' }}>
                        <div class="card-body cardy ">
                        <i class="fa-solid fa-users-gear"></i> <span>Total Admin </span> {nb.admin}
                         </div>
                        </div>
                        </div>


                        </div>
                        </>
              
              
              )
             })
         }
       </div>
       </>)
  }
}
