import axios from 'axios';
 
 class UserService {
 
 deleteUser(id) {
 axios.delete('http://localhost:5000/delete-user/' + id)
 .then(() => {
 console.log('User Deleted !!!')
 })
 .catch((error) => {
 console.log(error)
 })
 }
 }
 
 export default UserService;