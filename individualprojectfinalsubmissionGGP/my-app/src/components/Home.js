import React from 'react';
import '../Homepage.css';
import logo from '../HomePageImages/GGP Logo.png'
import me from '../HomePageImages/Mypicture2.jpeg'
 
const home = () => {
    return (
        <div>
          <title>GarethGravelinePleau-Homepage</title>
          <meta name="GarethGravelinePleauWebPage" content="HTML, CSS" />
          <div className="container">
            <div id="personalPhoto">
              <img src={me} alt="Me" width={430} height={585} />  
            </div>
            <div id="containerText">
              <br /><br /><br /><br />
              <div id="bracketContainer" style={{fontSize: '150px'}}>[</div>
              <h1 style={{textAlign: "center"}}><i>Hello,</i></h1>
              <h2 style={{textAlign: "center"}}>I'm</h2>
              <h1 id="name" style={{fontSize: '50px', textAlign:'center'}}><strong>Gareth Graveline-Pleau</strong></h1>
              <div id="bracketContainer" style={{fontSize: '150px', textAlign:'center'}}>]</div>
            </div>
            <div id="motto" style={{textAlign: 'center'}}>The environmental impact of the internet is far from the minds of most people.<br /><br /><br /><br />Because it's impact is mostly invisible to us.<br /><br /><br /><br />However, it's estimated that<br /><br /><br /><br /><div style={{fontSize: '60px'}}>2%</div><br /><br /><br />of carbon emissions are caused by internet usage. <sup style={{fontSize: '15px'}}><a href="https://kinsta.com/blog/zero-carbon-websites" style={{color: 'white'}}>1</a></sup><br /><br /><br /><br />As a developer, my Mission Statement is simple:<br /><br /><br /><br />
              vibrant websites <br /><br /><br /><br /> built for a sustainable tomorrow.</div>
            <br /><br />
            <footer className="footer">
              <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white', opacity: '0.6'}}>
                Contact: <a href="Contact.html" style={{color: 'white'}}>gherring@alumni.uoguelph.ca</a> <br />
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white'}}>Linkedin</a> <br />
                Background Picture Courtesty of: Wolfgang-asselmann</p2> 
            </footer>
            <img src={logo} alt="logo" width={50} height={50} id="logo" />
          </div></div>
      );
}
 
export default home;
