import React, {useState, useEffect} from 'react';
import '../Resume.css';
import me from '../HomePageImages/Mypicture2.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import axios from "axios";
import {
  TableBody,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { FcViewDetails } from "react-icons/fc";

const Resume = () => {
    
        const [resumeList, setResumeList] = useState("");
  const URL = "http://localhost:4000/resume/";
  
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
        setResumeList(responseData.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="resume-list">
      <div className="container">
      <div id="personalPhoto2">
            <img src={me} alt="Me" width={280} height={362} style={{borderRadius:"50%"}} />
            </div>
            <br/><br/><br/><br/>
          <h1>Gareth-Evers</h1>
          <h1>Graveline-Pleau</h1>
        <TableContainer component={Paper} style={{backgroundColor: "#f0eeee", opacity:"0.8", marginLeft:"10vw", marginRight:"40px", width:"80vw", textShadow:"none" }}>
          <Table>
            <TableHead >
              <TableRow style={{backgroundImage: "linear-gradient(to right, #0A2F67 , #90B2E5)"}}>    
                <h1 style={{ color: "grey", textAlign:"center",backgroundImage: "linear-gradient(to right, #0A2F67 , #90B2E5)", fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontSize:"32px", marginLeft:"30vw"}}>Experience</h1>
            </TableRow>
            </TableHead>
            <TableBody>
              {resumeList &&
                resumeList
                  .map((p) => (
                    <TableRow key={p.resume_id}>
                      <TableCell align="center" style={{fontSize: '25px'}}><FcViewDetails/></TableCell>
                      <TableCell align="center" style={{fontSize: '20px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'black'}}>{p.employer_name}</TableCell>
                      <TableCell align="center" >{p.position_name}</TableCell>
                      <TableCell align="center">{p.position_desc}</TableCell>
                      <TableCell align="center">{p.date}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    
        <footer className="footer">
            <p2 style={{fontSize: '8px', textAlign: 'left', marginTop: '14%', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: 'white'}}>
                <a href="https://www.linkedin.com/in/gareth-evers-graveline-pleau-3707891b8/" style={{color: 'white', fontSize: "15px"}}><FaLinkedin/></a><a href="https://www.instagram.com/garethevers/?hl=en" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaInstagram/></a><a href="https://github.com/GarethGravelinePleau" style={{color: 'white', fontSize: "15px", marginLeft: "5px"}}><FaGithub/></a> <br />
                Background Picture Courtesty of: Wolfgang-Hasselmann
            </p2>
        </footer>
        </div>
            
          
      );
  
}

export default Resume;