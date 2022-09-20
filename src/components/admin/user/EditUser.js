import React, { Component } from 'react'
import axios from 'axios';
 import '../admin.css'
import Cards from '../../Cards/card';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const customStyle = {
width: '300px',
margin: '0 auto'
}
export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
        prenom: '',
        nom: '',
        email: '',
        role: ''
        }
        }
        
        componentDidMount = () => {
        this.getUserById();
        }
        
        // To get employee based on ID
        getUserById() {
        axios.get('http://localhost:5000/get-user/' + this.props.match.params.id)
        .then((response) => {
        this.setState({
        prenom: response.data.prenom,
        nom: response.data.nom,
        email: response.data.email,
        role: response.data.role
        });
        })
        .catch((error) => {
        console.log(error);
        })
        }
        
        handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        }
        
        // To update the record on submit
        handleSubmit = (event) => {
        event.preventDefault();
        const { prenom, nom, email, role } = this.state;
        axios.put('http://localhost:5000/edit-user/' + this.props.match.params.id, {
        prenom: prenom,
        nom: nom,
        email: email,
        role: role,
        })
        .then((response) => {
        console.log(response);
      
       
        })
        .catch((error) => {
        console.log(error);
        });
        
        }

      
        
        render() {
            const  notify =()=>{
 
           toast.success(' 👌 compte modifié avec succés', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  });
                 
               }
           
        return (<>
            <Cards title="Modifier les paramétres "/>
            <br/>
        <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
        <label>
       Prenom
        <input
        name="prenom"
        type="text"
        value={this.state.prenom}
        onChange={this.handleChange}
        className="form-control"
        />
        </label>
        <br />
        <label>
       Nom
        <input
        name="nom"
        type="text"
        value={this.state.nom}
        onChange={this.handleChange}
        className="form-control"
        />
        </label>
        <br />
        <label>
        Email
        <input
        name="email"
        type="text"
        value={this.state.email}
        onChange={this.handleChange}
        className="form-control"
        />
        </label>
        <br />
        <label>
        role
        <input
        name="role"
        type="text"
        value={this.state.role}
        onChange={this.handleChange}
        className="form-control"
        />
        </label>
        <br />
        <div className="btn-group btn-group-lg col-lg-9">
          
          <button type="submit" className="btn btn-primary " onClick={notify}>
        okay go
          </button>
          <ToastContainer
          theme='colored'
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
        </div>
        </form>
        </div>
        </>
        );
       
        }
        }