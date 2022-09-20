import React from 'react'
import { Link } from 'react-router-dom';
import {logo} from '../../../images/1.JPG'
const  ListeCateg=({ posts })=> {
  return (
    <div >
   
    {posts.map((categ,key) => (
   <div className='card' Key={key}>
 <img src={`/src/images/${categ.img}`}  alt=".."/>
     <div className='card-body'>
   <h5 className='card-title'>{categ.nom}</h5>
    <p>{categ.desc}</p>
    <span>{categ.img}</span>
    <div >    
    <Link to="/edit-categ" className="btn btn-warning">edit</Link>{' '}
   
    <Link to="/" className="btn btn-danger">supp</Link>
   
    </div>
    </div>
    </div>
   ))};
    </div>
  );
}
export default ListeCateg;