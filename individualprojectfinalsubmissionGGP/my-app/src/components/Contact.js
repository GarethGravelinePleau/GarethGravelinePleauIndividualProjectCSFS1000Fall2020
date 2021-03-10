import React, { useState } from 'react';
import '../Contact.css';
import { Form, Input, Label, Button, Container } from 'reactstrap'
 
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

        <Container>
            <Form onSubmit={formSubmit}>
               
                    <Label for="emailEntry" name="myemail" style={{marginLeft:'-50px'}}>Email:</Label>
                    <Input type="email" name="email" id="myemail" style={{marginRight:'1%'}} onChange={e => setEmail(e.target.value) }/>
                    <br/> 
                
                    <Label for="phoneEntry">Phone Number:</Label>
                    <Input type="phone" name="phoneNumber" id="phoneNumber"  onChange={e => setPhoneNumber(e.target.value)}/>
                    
                    <br/> 
                    <Label for="nameEntry">Full Name:</Label>
                    
                    <Input type="name" name="name" id="namecontact" onChange={e => setName(e.target.value)}/>
                    
                    <br/> 
                    <Label for="messageEntry">Message:</Label>
                    
                    <Input type="textarea" name="text" id="comments" rows={1} cols={15} onChange={e => setContent(e.target.value)}/>
                 
                    <br/>
                    <Button className="button" id="submitbtn" type='submit' defaultValue='Submit'>Submit</Button>
                   
                    <Button className="button" id="resetbtn" type="reset" defaultValue='Reset'>Reset</Button>
                    
            </Form>
        </Container>
        <footer className="footer">

          <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', paddingBottom: 0, fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white', opacity: '0.6'}}>
            Contact:gherring@alumni.uoguelph.ca<br />
            <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white'}}>Linkedin</a> <br />
            Background Picture Courtesty of: Wolfgang-Hasselmann
          </p2> 
        </footer> 

        
      </div>
    );
}
 
export default Contact;