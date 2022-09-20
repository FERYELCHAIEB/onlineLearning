import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './side.css'
const Sidebar = () => {
   
    return (
       <>
        <div class="sidebar">
        <Link to="/admin"><i class="fa fa-fw fa-home"></i> Dashboard</Link><br/>
        <Link to="/add-categorie"><i class="fa-solid fa-list"></i> Catégorie</Link>
        <Link to="/admin/users"><i class="fa-solid fa-user-graduate"></i> Apprenants</Link>
        <Link to="/admin/teachers"><i class="fa-solid fa-chalkboard-user"></i> Formateurs</Link>
       
        <Link to="/profil-Admin"><i class="fa-solid fa-address-card"></i> Profil</Link>
        <Link to="/logout"><i class="fa-solid fa-arrow-right-to-bracket"></i> Déconnexion</Link>
      </div>
      <div className="marigin"></div>
      </>
    );
};

export default Sidebar;