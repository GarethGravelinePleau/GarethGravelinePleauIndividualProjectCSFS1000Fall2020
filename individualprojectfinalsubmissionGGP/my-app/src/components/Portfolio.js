import React from 'react';
import '../Portfolio.css';
import logo from '../HomePageImages/GGP Logo.png'
import portfolio1 from '../HomePageImages/portfolio1.png'
import portfolio2 from '../HomePageImages/portfolio2.png'
import portfolio3 from '../HomePageImages/portfolio3.jpeg'
import portfolio4 from '../HomePageImages/CSFS10101.png'
import portfolio5 from '../HomePageImages/Empty.png'


const Portfolio = () => {
    return (
        <div>
          <title>GarethGravelinePleau-Portfolio</title>
          <meta name="GarethGravelinePleauWebPage" content="HTML, CSS" />
          <script src="Portfolio.js"></script>
          <header>
            <div className="topnav">
              <p className="topnav-center" style={{color: 'white', float: 'none', marginLeft: '44%'}}> Gareth-Evers Graveline-Pleau </p>
              <div className="topnav-right">
                <a href="homepage.html">Home</a>
                <a className="active" href="Portfolio.html">Portfolio</a>
                <a href="Resume.html">Resume</a>
                <a href="Contact.html">Contact</a>
              </div>
            </div>
          </header>
          <h1>Come See What I've Been Working On!</h1>
          <div className="row"> {/*Here is our Gallery with multiple columns*/}
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Project - Admin Login</h2>
              </div>
              <div className="container1">
                <img src={portfolio1} alt="Portfolio" onclick="onClick(this)" className="modal-hover-opacity" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Login Interface</p>
                <img src={portfolio2} alt="Portfolio" onclick="onClick(this)" className="modal-hover-opacity" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Gallery Edit Page</p>
                <img src={portfolio3} alt="Portfolio" onclick="onClick(this)" className="modal-hover-opacity" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Contact Page</p>
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Coming Soon</h2>
              </div>
              <div className="container1">
                <img src={portfolio4} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Coming Soon</h2>
              </div>
              <div className="container1">
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
                <img src={portfolio5} alt="Empty" onclick="onClick(this)" className="modal-hover-opacity" />
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Coming Soon</h2>
              </div>
              <img src={portfolio5} alt="Empty" />
              <img src={portfolio5} alt="Empty" />
              <img src={portfolio5} alt="Empty" />
              <img src={portfolio5} alt="Empty" />     
            </div>
            <div id="modal01" className="modal" onclick="this.style.display='none'"> {/*Here is our modal to get the portfolio gallery pics to pop out when clicked*/}
              <span className="close">×&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <div className="modal-content">
                <img id="img01" style={{maxWidth: '100%'}} />
              </div>
            </div>
            <footer className="footer">
              <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white', opacity: '0.6'}}>
                Contact: <a href="Contact.html" style={{color: 'white'}}>gherring@alumni.uoguelph.ca</a> <br />
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white'}}>Linkedin</a> <br />
                Background Picture Courtesty of: Wolfgang-Hasselmann</p2>
            </footer>
            <img src={logo} alt="logo" width={50} height={50} id="logo" />
          </div></div>
      );
  
}
export default Portfolio;