import React, { useState,useEffect } from 'react'
import axios from 'axios';

import {Route } from 'react-router-dom'
import './categorie.css'
import ListeCateg from './ListeCateg';

 function Categorie() {
   const [posts , setPosts]= useState([]);
useEffect(()=>{
    axios.get('http://localhost:5000/get-categories/')
    .then(res=>setPosts(res.data))
    .catch(err=>console.log(err));
});
return(<>
    <Route to="/" render={()=><ListeCateg posts={posts}/> }/>
    
    </>
)
       
}
export default Categorie