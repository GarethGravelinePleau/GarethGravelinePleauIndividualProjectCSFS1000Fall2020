import React, { useState} from 'react'
import { Button, Form, Label, Input} from 'reactstrap'
import '../Login.css';
import { useHistory, useLocation } from 'react-router-dom'

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginSubmit = async event => {
        
        event.preventDefault()
        const response = await fetch('http://localhost:4000/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({email, password})
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
            
              <Form onSubmit={loginSubmit} className="form">
                
                    <Label for="loginEmail">Email: </Label>
                    <Input type="email" name="loginEmail" id="loginEmail" placeholder="myemail@email.com" onChange={e => setEmail(e.target.value)}/>
                      <br/>
                  
                    <Label for="examplePassword">Password: </Label>
                    <Input type="password" name="examplePassword" id="examplePassword" placeholder="********" onChange={e => setPassword(e.target.value)} />
                      <br/>

                    <Button id="loginButton">Submit</Button>

              </Form>
           
          );
        
}

export default Login