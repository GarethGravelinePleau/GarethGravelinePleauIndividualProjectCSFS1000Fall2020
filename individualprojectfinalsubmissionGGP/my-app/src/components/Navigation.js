import React from 'react';
import {  NavLink } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       
          
          <div className="topnav">
            <p className="topnav-center" style={{color: 'white', float: 'none', marginLeft: '5%', marginTop: '12px',  fontSize: '20px'}}><b> Gareth GP </b></p>
            <div className="topnav-right">
            <NavLink tag={RouteLink} to="/home">Home</NavLink>
            <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
            <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
            <NavLink tag={RouteLink} to="/contact">Contact</NavLink>
            <NavLink tag={RouteLink} to="/entries">Entries</NavLink>
            
            
            </div>
          </div>
         
       
    );
}
 
export default Navigation;