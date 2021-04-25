import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import parseJwt from './Authentication'

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

export default function UserCreate() {
    const classes = useStyles();
    const [username, setName] = useState("");
    const [userpassword, setPassword] = useState("");
    const [useremail, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [users, setUsers] = useState({});
  let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login") 
}
  const URL = "http://localhost:4000/users/";

  const submitNewUser = async (event) => {
    event.preventDefault();
    let newUser = {      
      users_name: username,
      users_password: userpassword,
      users_email: useremail,
    };

    try {
      axios.post(`${URL}/register`, newUser).then(() => {
        console.log("Successfully created new user");
        setSuccess(true);
      });

      setTimeout(function () {
        history.push("/entries");
      }, 2000);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      throw err;
    }
  };

  return (
    <div className="container_user">
      <h1>Add User</h1>
      <form className="user_form" onSubmit={submitNewUser}>
      <TextField
          className={classes.textField}
          id="user-name"
          label="User Name"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="user-password"
          label="Password"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={userpassword}
          onChange={(b) => setPassword(b.target.value)}
        />
        <TextField
          className={classes.textField}
          id="user-email"
          label="User Email"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={useremail}
          onChange={(b) => setEmail(b.target.value)}
        />
        
        <Button type="submit" variant="outlined" color="black" boxShadow={3}>
          Add User
        </Button>
      </form>
      {success && (
        <Alert variant="outlined" color="grey">
          New user added!
        </Alert>
      )}
    </div>
  );
}