import React from 'react';
import '../Homepage.css';
import me from '../HomePageImages/Mypicture2.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
 
const home = () => {
    return (
    <div>
          
        <div className="container"> 

          <div >
              <img id="personalPhoto" src={me} alt="Me" />  
          </div>

          <div id="containerText" style={{marginLeft:"20px"}}>
          <br /><br /><br /><br />  {/* will be fixing all of these breaks from FS1000 later */}

          <div id="bracketContainer" style={{fontSize: '150px'}}>[</div>
              <h1 style={{textAlign: "center"}}><i>Hello,</i></h1>
              <h2 style={{textAlign: "center"}}>I'm</h2>
              <h1 id="name" style={{fontSize: '50px', textAlign:'center'}}><strong>Gareth Graveline-Pleau</strong></h1>
              <div id="bracketContainer" style={{fontSize: '150px', textAlign:'center', marginLeft:"20px"}}>]</div>
          </div>

          <div id="motto" style={{textAlign: 'center'}}>The ecological impact of the world's internet usage is staggering. <br /><br /><br /><br />Indeed, it's influence is mostly invisible to us.<br /><br /><br /><br />However, it's estimated that<br /><br /><br /><br /><div style={{fontSize: '60px'}}>2%</div><br /><br /><br />of carbon emissions can be directly attributed to worldwide internet usage. <sup style={{fontSize: '15px'}}><a href="https://kinsta.com/blog/zero-carbon-websites" style={{color: 'white'}}>1</a></sup><br /><br /><br /><br />As a developer, my Mission Statement is simple:<br /><br /><br /><br />
              vibrant websites <br /><br /><br /><br /> built for a sustainable tomorrow <FaLeaf/>
          </div>
          <br /><br />

          <footer className="footer">
              <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white'}}>
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white', fontSize: "15px"}}><FaLinkedin/></a><a href="https://www.instagram.com/garethevers/?hl=en" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaInstagram/></a><a href="https://github.com/GarethGravelinePleau" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaGithub/></a> <br />
                Background Picture Courtesty of: Wolfgang-asselmann
              </p2> 
          </footer> {/* will be turning footer into its own component later later */}
            
        </div>
    </div>
      );
}
 
export default home;
