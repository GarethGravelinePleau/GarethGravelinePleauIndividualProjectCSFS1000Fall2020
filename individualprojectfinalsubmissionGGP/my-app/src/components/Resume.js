import React from 'react';
import "../Resume.css";
import logo from '../HomePageImages/GGP Logo.png'
import me from '../HomePageImages/Mypicture2.jpeg'
 
const Resume = () => {
    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>GarethGravelinePleau-Resume</title>
          <meta name="GarethGravelinePleauWebPage" content="HTML, CSS" />
          <header>
            <div className="topnav">
              <p className="topnav-center" style={{color: 'white', float: 'none', marginLeft: '44%'}}> Gareth-Evers Graveline-Pleau </p>
              <div className="topnav-right">
                <a href="homepage.html">Home</a>
                <a href="Portfolio.html">Portfolio</a>
                <a className="active" href="Resume.html">Resume</a>
                <a href="Contact.html">Contact</a>
              </div>
            </div>
            <div id="personalPhoto2">
              <img src={me} alt="Me" width={280} height={362} />
            </div>
            <br /><br /><br /><br />
          </header>
          <p>
          </p><h1>Gareth-Evers</h1>
          <h1>Graveline-Pleau</h1>
          <br />
          <h2>About Me</h2>
          <p>
            I'm a web development student at York University, passionate about clean, minimalistic, environmentally friendly web development.
          </p>
          <br /><br />
          <h2>General</h2>
          <p> DOB         March 25, 1989 </p>
          <p>Address         175, Columbia Road, Barrie, Ontario, Canada</p>
          <p>Phone           705-500-0181</p>
          <p>Email           <a href="Contact.html">gherring@alumni.uoguelph.ca</a>  </p>       
          <br /><br />
          <h2>Employment</h2>
          <p>Elections Canada 2019           Poll Clerk - Tabulating official elections results for Elections Canada.</p>
          <p>Loblaws 2017-2020               Clerk</p>
          <p>Highschool Math Tutor 2007-Ongoing - Assisting students in university math preparation.</p>
          <br /><br />
          <h2>Education</h2>
          <p>York University - Certificate in Full Stack Web Development           2020-2021</p>
          <p>University of Guelph - BA Political Science      2007-2012</p>
          <p>Laubach Literacy Tutoring Certification</p>
          <p>University Entry Calculus Certificate</p>
          <br /><br />
          <h2>Awards</h2>
          <p>University of Guelph Dean's List</p>
          <p>University of Guelph - Entrance Scholarship </p>
          <p>Canada and World Issues Bursary</p>
          <p>Ontario Scholar</p>
          <p />
          <br /><br />
          <footer className="footer">
            <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white', opacity: '0.6'}}>
              Contact: <a href="Contact.html">gherring@alumni.uoguelph.ca</a> <br />
              <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white'}}>Linkedin</a> <br />
              Background Picture Courtesty of: Wolfgang-Hasselmann
            </p2> 
          </footer>
          <img src={logo} alt="logo" width={50} height={50} id="logo" />
        </div>
      );
}
 
export default Resume;