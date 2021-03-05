import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          
          
          <div className="topnav">
            <p className="topnav-center" style={{color: 'white', float: 'none', marginLeft: '44%'}}> Gareth-Evers Graveline-Pleau </p>
            <div className="topnav-right">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
         
       </div>
    );
}
 
export default Navigation;