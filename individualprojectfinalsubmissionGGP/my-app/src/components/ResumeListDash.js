import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import parseJwt from './Authentication'


function ResumeListDash() {
  const [resumeListDash, setResumeListDash] = useState("");
  const URL = "http://localhost:4000/resume/";
  const [open, setOpen] = useState(false);
  const [btnDelete, setBtnDelete] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login") 
}

  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await axios
          .get(`${URL}`, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            return response;
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(responseData.data.result);
        setResumeListDash(responseData.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const deleteResumeListDash= (e, id) => {
    e.preventDefault();

    axios.delete(`${URL}/delete/${id}`).then((res) => {
      setResumeListDash(
        
      );
    });

    setOpen(false);

    setTimeout(function () {
      window.location.reload();
    }, 300);
  };

  

  return (
    <div className="resume-list-dash">
      <div className="container">
        <h1
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
            align: "center",
            color:"grey"
          }}
        >
          RESUME CRUD
        </h1>
        <TableContainer component={Paper} style={{color:"Grey", opacity:"0.8"}}>
          <Table style={{color:"Grey", opacity:"0.8"}}>
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  style={{ fontWeight: "700", color: "Black" }}
                >
                  Employer Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "700", color: "Black" }}
                >
                  Position Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "700", color: "Black" }}
                >
                  Position Description
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "700", color: "Black" }}
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resumeListDash &&
                resumeListDash
                  .map((p) => (
                    <TableRow key={p.resume_id}>
                      
                      <TableCell align="center">{p.employer_name}</TableCell>
                      <TableCell align="center" >{p.position_name}</TableCell>
                      <TableCell align="center">{p.position_desc}</TableCell>
                      <TableCell align="center">{p.date}</TableCell>
                    
                      <TableCell align="center">
                        <Link
                          to={`/resume/update/${p.resume_id}`}
                        >
                          <Button style={{color:"Grey"}}>
                            <EditIcon />
                          </Button>
                        </Link>
                        <Button
                        style={{color:"Grey"}}
                          onClick={(e) => {
                            setOpen(true);
                            setBtnDelete(p.resume_id);
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Link
        to={`/resume/create/`}
        >
            <button style={{marginTop:"50px"}}>CREATE</button>
            
        </Link>  
        <tr>
            <button onClick={logout}>Logout</button>
            
        </tr>                 
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete Resume Section"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>Are you sure you'd like to delete resume section?</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Disagree
            </Button>
            <Button
              onClick={(e, radio_id) => {
                deleteResumeListDash(e, btnDelete);
              }}
              color="primary"
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default ResumeListDash;
