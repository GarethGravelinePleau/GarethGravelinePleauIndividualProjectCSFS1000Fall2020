import React, { useState } from 'react';
import '../Contact.css';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
 
const Contact = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [content, setContent] = useState("")

  const formSubmit = async event => {
      event.preventDefault()
      const response = await fetch('http://localhost:4000/contact_form/entries', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify({name, email, phoneNumber, content})
      })
      const payload = await response.json()
      if (response.status >= 400) {
          alert(`Oops! Error: ${payload.message} for fields: ${payload.errors.join(",")}`)
      } else {
          alert(`Congrats! Submission submitted with id: ${payload.id}`)
      }
  }
    return (
       <div style= {{fontFamily: 'Courier New, Courier, monospace'}}>
        
        <h4><div id="bodyTitle">If you have any questions or comments <br/><br/> please feel free to send me a comment below or contact me at:</div><br /><br /><br /><br /><br />705-500-0181<br /><br /><a href="ContactPage.html">gherring@alumni.uoguelph.ca</a><br /><br />or through <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/">LinkedIn</a><br /><br /><br /><br /><div id="bodyTitle2">My Mission Statement is simple:<br />
            
        <br/><br/>
        <div style={{fontSize: '25px'}}><strong>Vibrant websites built for a sustainable future.</strong></div><br /><br /> <br /> Thank you for visiting, I look forward to hearing from you!</div> </h4><br /><br /><br /><br />

            <div className="loginContainer">
        <section>
          <form onSubmit={formSubmit}>
            <label>
              <input name="name" id="contactName" type="text" onChange={e => setName(e.target.value)} />
              <div className="label-text">Full Name</div>
            </label>
            <label>
              <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value) }/>
              <div className="label-text">Email</div>
            </label>
            <label>
              <input type="tel" name="phone" id="phone" onChange={e => setPhoneNumber(e.target.value)}/>
              <div className="label-text">Phone Number</div>
            </label>
            <label>
              <input type="textarea" name="text" id="comments" onChange={e => setContent(e.target.value)}/>
              <div className="label-text">Comments</div>
            </label>
            <button type="submit" value="Submit">Submit</button>
          </form>
        </section>
      </div>
        
        <footer className="footer">

          <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', paddingBottom: 0, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white'}}>
            <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white', fontSize: "15px"}}><FaLinkedin/></a><a href="https://www.instagram.com/garethevers/?hl=en" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaInstagram/></a><a href="https://github.com/GarethGravelinePleau" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaGithub/></a> <br />
            Background Picture Courtesty of: Wolfgang-Hasselmann
          </p2> 
        </footer> 

        
      </div>
    );
}
 
export default Contact;