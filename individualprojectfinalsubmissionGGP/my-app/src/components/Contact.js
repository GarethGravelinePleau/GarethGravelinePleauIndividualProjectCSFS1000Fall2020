import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../Contact.css';


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(4),
    minWidth: 120,
  },
  textField: {
    marginBottom: 30,
  },
  headerColor: {
    color: "#666666",
  },
}));
 
export default function Contact() {
  const classes = useStyles();
  const [entryID, setID] = useState("");
  const [entryname, setName] = useState("");
  const [entryemail, setEmail] = useState("");
  const [entrynumber, setNumber] = useState("");
  const [entrycontent, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const [entries, setEntries] = useState({});
let history = useHistory();
  
const URL = "http://localhost:4000/entries";

const submitNewEntry = async (event) => {
  event.preventDefault();
  let newEntry = {      
      
      entry_name: entryname,
      entry_email: entryemail,
      entry_number: entrynumber,
      entry_content: entrycontent,
  };

  

  try {
    axios.post(`${URL}/create`, newEntry).then(() => {
      console.log("Successfully created entry");
      setSuccess(true);
    });

    
    setTimeout(function () {
      history.push("/");
    }, 2000);
  } catch (err) {
    console.log(err);
    setSuccess(false);
    throw err;
  }
};
    return (
       <div style= {{fontFamily: 'Courier New, Courier, monospace'}}>
        
        <h4><div id="bodyTitle">If you have any questions or comments <br/><br/> please feel free to send me a comment below or contact me at:</div><br /><br /><br /><br /><br />705-500-0181<br /><br /><a href="ContactPage.html">gherring@alumni.uoguelph.ca</a><br /><br />or through <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/">LinkedIn</a><br /><br /><br /><br /><div id="bodyTitle2">My Mission Statement is simple:<br />
            
        <br/><br/>
        <div style={{fontSize: '25px'}}><strong>Vibrant websites built for a sustainable future.</strong></div><br /><br /> <br /> Thank you for visiting, I look forward to hearing from you!</div> </h4><br /><br /><br /><br />

            <div className="loginContainer">
        <section>
          <form onSubmit={submitNewEntry}>
            <label>
              <input name="name" id="contactName" type="text" required value={entryname} onChange={e => setName(e.target.value)} />
              <div className="label-text">Full Name</div>
            </label>
            <label>
              <input type="email" name="email" id="email" required value={entryemail} onChange={e => setEmail(e.target.value) }/>
              <div className="label-text">Email</div>
            </label>
            <label>
              <input type="text" name="phone" id="phone" required value={entrynumber} onChange={e => setNumber(e.target.value)}/>
              <div className="label-text">Phone Number</div>
            </label>
            <label>
              <input type="textarea" name="text" id="comments" required value={entrycontent} onChange={e => setContent(e.target.value)}/>
              <div className="label-text">Comments</div>
            </label>
            <button type="submit" value="Submit">Submit</button>
          </form>
          {success && (
        <alert severity="success" color>
          New entry submitted!
        </alert>
      )}

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
 
