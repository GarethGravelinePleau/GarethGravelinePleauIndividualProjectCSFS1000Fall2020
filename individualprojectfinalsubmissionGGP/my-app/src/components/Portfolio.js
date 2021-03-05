import React from 'react';
import '../Portfolio.css';
import logo from '../HomePageImages/GGP Logo.png'
import portfolio1 from '../HomePageImages/portfolio1.png'
import portfolio2 from '../HomePageImages/portfolio2.png'
import portfolio3 from '../HomePageImages/portfolio3.jpeg'
import portfolio4 from '../HomePageImages/CSFS10101.png'
import portfolio6 from '../HomePageImages/portfolio6.png'
import portfolio5 from '../HomePageImages/Empty.png'


const Portfolio = () => {
    return (
        <div>
          <title>GarethGravelinePleau-Portfolio</title>
          <meta name="GarethGravelinePleauWebPage" content="HTML, CSS" />
          <script src="Portfolio.js"></script>
          <h1>Come See What I've Been Working On!</h1>
          <div className="row"> {/*Here is our Gallery with multiple columns*/}
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Project - Admin Login</h2>
              </div>
              <div className="container1">
                <img src={portfolio1} alt="Portfolio"/>
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Login Interface</p>
                <img src={portfolio2} alt="Portfolio" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Gallery Edit Page</p>
                <img src={portfolio3} alt="Portfolio"/>
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Contact Page</p>
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Coming Soon</h2>
              </div>
              <div className="container1">
                <img src={portfolio4} alt="Empty" />
                <img src={portfolio6} alt="Empty" />
                <img src={portfolio5} alt="Empty" />
                <img src={portfolio5} alt="Empty" />
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>Coming Soon</h2>
              </div>
              <div className="container1">
                <img src={portfolio5} alt="Empty" />
                <img src={portfolio5} alt="Empty" />
                <img src={portfolio5} alt="Empty" />
                <img src={portfolio5} alt="Empty"  />
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