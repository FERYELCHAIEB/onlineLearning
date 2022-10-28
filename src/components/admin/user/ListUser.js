import React, { Component } from 'react';
 import axios from 'axios';
import { Link } from 'react-router-dom';
import '../admin.css'
import UserService from './Services';
import { Table, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import NavAdmin from '../NavAdmin';
var divStyle = {
margin: '8% 8%',
};

class ListUser extends Component {

constructor(props) {
super(props);
this.userService = new UserService();
this.state = {
users: []
}
this.deleteUser = this.deleteUser.bind(this)
}

componentDidMount = () => {
this.getUserList();
}

// To get all the employees
getUserList() {
axios.get('http://localhost:5000/get-users')
.then((response) => {
console.log(response);
this.setState({
users: response.data
});
})
.catch((error) => {
console.log(error);
})
}

// To delete any employee
deleteUser(empid) {
this.userService.deleteUser(empid);
this.getUserList();
}

render() {
     
const { users } = this.state; 
return (
    <>
    <NavAdmin/>
<div style={divStyle}>
    <h1 className='dashliste'>Liste des apprenants <i class="fa-solid fa-users-gear"></i></h1>
<Table variant="dark" >
<thead  >
<tr >
<th>#</th>
<th>Prenom</th>
<th>Nom</th>
<th>Email</th>
<th>Role</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
{
users && users.map((user, i) => {
return (
   
<tr key={i}>
<td>{i}</td>
<td>{user.prenom}</td>
<td>{user.nom}</td>
<td>{user.email}</td>
<td>{user.role}</td>
<td>
<Button variant="warning" ><Link to={"/admin/edit-user/" + user._id}><i class="fa-solid fa-user-pen"></i></Link></Button>
</td>
<td>
<Button onClick={() => {this.deleteUser(user._id)}} variant="danger" ><i class="fa-solid fa-trash-can"></i></Button>

</td>
</tr>

)

})
}
</tbody>
</Table>

<Button variant="info" ><Link to="/admin"><i class="fa-solid fa-hand-point-left"> </i> retour</Link></Button>
</div>
</>
);
} 
}

export default ListUser;