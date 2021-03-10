import React from 'react';
import '../Portfolio.css';
import portfolio1 from '../HomePageImages/portfolio1.png'
import portfolio2 from '../HomePageImages/portfolio2.png'
import portfolio3 from '../HomePageImages/portfolio3.jpeg'
import portfolio4 from '../HomePageImages/CSFS10101.png'
import portfolio6 from '../HomePageImages/portfolio6.png'
import portfolio5 from '../HomePageImages/Empty.png'
import portfolio9 from '../HomePageImages/portfolio9.png'
import portfolio13 from '../HomePageImages/portfolio13.png'
import portfolio11 from '../HomePageImages/portfolio11.png'
import portfolio12 from '../HomePageImages/portfolio12.png'

const Portfolio = () => {
    return (
        <div>
          <title>GarethGravelinePleau-Portfolio</title>
          <meta name="GarethGravelinePleauWebPage" content="HTML, CSS" />
          <script src="Portfolio.js"></script>
          <h1 id="portfoliotitle"><i>Come See What I've Been Working On!</i></h1>
          <div className="row">
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
                <h2>City Tourism Homepage</h2>
              </div>
              <div className="container1">
                <img src={portfolio4} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Dynamic Image Overlay</p>
                <img src={portfolio9} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Contact Page</p>
                <img src={portfolio13} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Nav Bar</p>
              </div>
            </div>
            <div className="column">
              <div className="portfolioHeadings">
                <h2>jQuery To-do List App</h2>
              </div>
              <div className="container1">
                <img src={portfolio6} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>List Items With Date</p>
                <img src={portfolio11} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Check Off Items</p>
                <img src={portfolio12} alt="Empty" />
                <p style={{fontFamily: '"Courier New", Courier, monospace', color: 'white'}}>Drag And Re-arrange List Items</p>
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
            
          </div></div>
      );
  
}

export default Portfolio;