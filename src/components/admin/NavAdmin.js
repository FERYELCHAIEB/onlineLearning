import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavAdmin = () => {
    const location = useLocation()
    const isActive = (path)=>{
        if(location.pathname===path)return {color:"#FFFFFF",fontSize: "22px",fontWeight:"700"}
        else return {color:"#ffffff",fontSize: "22px",fontWeight:"600"}
    }
    return (
        <div>
            <ul className='nav nav-tabs justify-content-center navbar-light bg-info ' >
                <li className='nav-item ' >
                    <Link
                        className='nav-link fs-9 '
                        style={isActive("/admin")}
                        to="/admin"
                        >
                        <i class="fa fa-fw fa-home"></i> Dashboard
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link fs-9'
                        style={isActive("/getform")}
                        to="/getform">
                      < i class="fa-solid fa-list"></i> Catégories
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link fs-9'
                        style={isActive("/admin/users")}
                        to="/admin/users">
                 <i class="fa-solid fa-user-graduate"></i>  Apprenants
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                        className='nav-link fs-9'
                        style={isActive("/admin/teachers")}
                        to="/admin/teachers">
                  <i class="fa-solid fa-chalkboard-user"></i>  Formateurs
                    </Link>
                </li>
               
            </ul>
        </div>
    )
}

export default NavAdmin