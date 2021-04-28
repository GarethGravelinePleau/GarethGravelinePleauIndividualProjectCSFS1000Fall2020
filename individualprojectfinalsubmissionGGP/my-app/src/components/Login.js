import React, { useState} from 'react'
import '../Login.css';
import { useHistory, useLocation } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [users_email, setEmail] = useState("")
    const [users_password, setPassword] = useState("")

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({users_email, users_password})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Error: ${payload.message}`)
        } else {
            sessionStorage.setItem('token', payload.token)

            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
    }

          return (
            
             <div>
              <div className="loginContainer" id="loginContainer">
              <section>
                <form onSubmit={loginSubmit}>
                  <label>
                    <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value) }/>
                    <div className="label-text" style={{ fontFamily: "courier new"}}>Email</div>
                  </label>
                  <label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
                    <div className="label-text" style={{ fontFamily: "courier new"}}>Password</div>
                  </label>
                  <button type="submit" value="Submit">Submit</button>
                </form>
              </section>
            </div>
            <footer className="footer" id="loginFooter">
              <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '150px', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white'}}>
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white', fontSize: "15px"}}><FaLinkedin/></a><a href="https://www.instagram.com/garethevers/?hl=en" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaInstagram/></a><a href="https://github.com/GarethGravelinePleau" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaGithub/></a> <br />
                Background Picture Courtesty of: Wolfgang-Hasselmann</p2>
            </footer>
            </div>

            
           
          );
        
}

export default Login