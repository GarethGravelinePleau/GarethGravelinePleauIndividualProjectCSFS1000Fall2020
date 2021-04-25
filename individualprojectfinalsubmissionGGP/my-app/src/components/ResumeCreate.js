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

export default function ResumeCreate() {
    const classes = useStyles();
    const [employername, setEmployer] = useState("");
    const [positionname, setPosition] = useState("");
    const [positiondesc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [success, setSuccess] = useState(false);
    const [resume, setResume] = useState({});
  let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login") 
}
  const URL = "http://localhost:4000/resume/";

  const submitNewResume = async (event) => {
    event.preventDefault();
    let newResume = {      
        employer_name: employername,
        position_name: positionname,
        position_desc: positiondesc,
        date: date
    };

    try {
      axios.post(`${URL}/create`, newResume).then(() => {
        console.log("Successfully created resume section");
        setSuccess(true);
      });

      setTimeout(function () {
        history.push("/resume");
      }, 2000);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      throw err;
    }
  };

  return (
    <div className="container_resume">
      <h1>Add New Resume Section</h1>
      <form className="resume_form" onSubmit={submitNewResume}>
      <TextField
          className={classes.textField}
          id="employer-name"
          label="Employer"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={employername}
          onChange={(e) => setEmployer(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="resume-position"
          label="Position"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={positionname}
          onChange={(b) => setPosition(b.target.value)}
        />
        <TextField
          className={classes.textField}
          id="resume-position-desc"
          label="Description of Position"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={positiondesc}
          onChange={(b) => setDesc(b.target.value)}
        />
        <TextField
          className={classes.textField}
          id="resume-date"
          label="Date Employed"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={date}
          onChange={(b) => setDate(b.target.value)}
        />
        <Button type="submit" variant="outlined" color="black" boxShadow={3}>
          Add Resume Section
        </Button>
      </form>
      {success && (
        <Alert variant="outlined" severity="success">
          New resume section added!
        </Alert>
      )}
    </div>
  );
}