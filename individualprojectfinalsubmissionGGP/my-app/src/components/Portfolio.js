import React, {useState, useEffect} from 'react';
import '../Portfolio.css';
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
  TablePagination,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const Portfolio = () => {
    
        const [portfolioList, setPortfolioList] = useState("");
  const URL = "http://localhost:4000/portfolio/";
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
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
        setPortfolioList(responseData.data.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  

  return (
    <div className="portfolio-list">
      <div className="container">
        <h1
          id="portfoliotitle"
          style={{
            display: "block",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          Come See What I've Been Working On!
        </h1>
        <TableContainer component={Paper} style={{backgroundColor: "#f0eeee", opacity:"0.8", marginLeft:"10vw", marginRight:"40px", width:"80vw" }}>
          <Table>
            <TableHead style={{backgroundImage: "linear-gradient(to right, #103C7F , #93B8EF)",  opacity:"0.8"}}>
              <TableRow>
                <TableCell
                  align="center"
                >
                </TableCell>
                <TableCell
                  align="center"
                  width="450"
                >
                </TableCell>
                <TableCell
                  align="center"
                >
                </TableCell>
                <TableCell
                  align="center"
                  style={{ fontWeight: "700", color: "#230051" }}
                >
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolioList &&
                portfolioList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((p) => (
                    <TableRow key={p.portfolio_id}>
                      <TableCell align="center">{p.portfolio_name}</TableCell>
                      <TableCell align="center" ><img src={p.portfolio_image} width="300vw" height="200vh"></img></TableCell>
                      <TableCell align="center">{p.portfolio_description}</TableCell>
                      <TableCell align="center"><a href={p.portfolio_link} style={{ color: "black" }}>Link</a></TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={portfolioList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
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

export default Portfolio;