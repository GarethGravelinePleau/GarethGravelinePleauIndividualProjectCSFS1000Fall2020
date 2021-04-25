import React, { useState, useEffect } from "react";
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

export default function ResumeUpdate(props) {
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

  useEffect(() => {
    let id = props.match.params.id;
    console.log(`${URL}/${id}`);
    axios.get(`${URL}/${id}`).then(({ data }) => {
      setResume(data.result[0]);
      console.log(data.result[0]);
    });
  }, [props.match.params.id]);

  const submitUpdateResume = async (event, id) => {
    event.preventDefault();
    let updateResume = {      
      employer_name: employername,
      position_name: positionname,
      position_desc: positiondesc,
      date: date
    };

    try {
      axios.put(`${URL}/update/${id}`, updateResume).then((res) => {
        console.log("Resume Updated!");
        setResume(updateResume);
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
    <div className="container_patient">
      <h1 style={{color:"Grey"}}>Update Your Resume</h1>
      <form
        className="update_resume_form"
        onSubmit={(e, b, id) => submitUpdateResume(e, props.match.params.id)}
        style={{color:"grey", borderColor:"black",}}
      >
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
        
        <Button type="submit" variant="outlined" boxShadow={4} style={{color:"Black", opacity:"0.6"}}>
          Update Resume
        </Button>
      </form>
      {success && (
        <Alert variant="outlined" severity="success">
          Your Resume Has Been Updated
        </Alert>
      )}
    </div>
  );
}