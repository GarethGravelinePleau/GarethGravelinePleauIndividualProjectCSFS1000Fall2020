import React from 'react';
import '../Portfolio.css';
import portfolio1 from '../HomePageImages/portfolio1.png'
import portfolio3 from '../HomePageImages/portfolio3.jpeg'
import portfolio4 from '../HomePageImages/CSFS10101.png'
import portfolio6 from '../HomePageImages/portfolio6.png'
import portfolio9 from '../HomePageImages/portfolio9.png'
import portfolio13 from '../HomePageImages/portfolio13.png'
import portfolio23 from '../HomePageImages/portfolio23.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div>
            <h1 id="portfoliotitle">
              COME SEE WHAT I'VE BEEN WORKING ON
              
            </h1>
          
        <div className="gallery">
            <div style={{margin:"20px"}}><img src={portfolio1} alt="Portfolio" className="portfolioImages"/><br/>Admin Login Page</div>
            <div style={{margin:"20px"}}><img src={portfolio3} alt="Portfolio" className="portfolioImages"/><br/>Contact Page</div>
            <div style={{margin:"20px"}}><img src={portfolio4} alt="Portfolio" className="portfolioImages"/><br/>Responsive Tourist Landmarks Page</div>
            <div style={{margin:"20px"}}><img src={portfolio9} alt="Portfolio" className="portfolioImages"/><br/>Contact Page</div>
            <div style={{margin:"20px"}}><img src={portfolio13} alt="Portfolio" className="portfolioImages"/><br/>Landmarks Page Navbar Functionality</div>
            <div style={{margin:"20px"}}><img src={portfolio6} alt="Portfolio" className="portfolioImages"/><br/> jQuery Todo List</div>
            <div style={{margin:"20px"}}><img src={portfolio23} alt="Portfolio" className="portfolioImages"/><br/> Drag and Drop jQuery Todo List Items</div>
       
        </div>
        <footer className="footer">
            <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white'}}>
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white', fontSize: "15px"}}><FaLinkedin/></a><a href="https://www.instagram.com/garethevers/?hl=en" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaInstagram/></a><a href="https://github.com/GarethGravelinePleau" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaGithub/></a> <br />
                Background Picture Courtesty of: Wolfgang-Hasselmann
            </p2>
        </footer>
            
          </div>
      );
  
}

export default Portfolio;