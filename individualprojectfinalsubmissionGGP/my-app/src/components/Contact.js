import React from 'react';
import '../Contact.css';
import logo from '../HomePageImages/GGP Logo.png'

 
const Contact = () => {
    return (
       <div style= {{fontFamily: 'Courier New, Courier, monospace'}}>
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
              <a href="Resume.html">Resume</a>
              <a className="active" href="Contact.html">Contact</a>
            </div>
          </div>
          <br /><br /><br /><br />
        </header>
        <h4><div id="bodyTitle">If you have any questions or comments <br /><br /> please feel free to send me a comment below or contact me at:</div><br /><br /><br /><br /><br />705-500-0181<br /><br /><a href="ContactPage.html">gherring@alumni.uoguelph.ca</a><br /><br />or through <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/">LinkedIn</a><br /><br /><br /><br /><div id="bodyTitle2">My Mission Statement is simple:<br />
            <br /><br />
            <div style={{fontSize: '25px'}}><strong>Vibrant websites built for a sustainable future.</strong></div><br /><br /> <br /> Thank you for visiting, I look forward to hearing from you!</div> </h4><br /><br /><br /><br />
        <form action="comment.php" method="post" name="contactForm" onsubmit="return validateForm()"> 
          <label htmlFor="Name" name="nameContact">Name</label>
          <input type="name" name="nameContact" id="namecontact" />
          <br /><br />
          <label htmlFor="myemail" name="myemail">Email:</label>
          <input type="email" name="myemail" id="myemail" required style={{marginRight: '1%'}} />
          <br />
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" name="comments" rows={1} cols={15} style={{marginTop: '40px'}} defaultValue={""} />
          <br /><br /><br />
          <input className="button" type="submit" defaultValue="Submit" />&nbsp;&nbsp;
          <input className="button" type="reset" defaultValue="Reset" />
        </form>
        <footer className="footer">
          <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', paddingBottom: 0, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white', opacity: '0.6'}}>
            Contact: <a href="Contact.html">gherring@alumni.uoguelph.ca</a> <br />
            <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white'}}>Linkedin</a> <br />
            Background Picture Courtesty of: Wolfgang-Hasselmann
          </p2> 
        </footer> 
        <img src={logo} alt="logo" width={50} height={50} id="logo" />
      </div>
    );
}
 
export default Contact;