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

export default function PortfolioCreate() {
    const classes = useStyles();
    const [portfolioname, setName] = useState("");
    const [portfolioimage, setImage] = useState("");
    const [portfoliodescription, setDesc] = useState("");
    const [portfoliolink, setLink] = useState("");
    const [success, setSuccess] = useState(false);
    const [portfolio, setPortfolio] = useState({});
  let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).email
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login") 
}
  const URL = "http://localhost:4000/portfolio/";

  const submitNewPortfolio = async (event) => {
    event.preventDefault();
    let newPortfolio = {      
      portfolio_name: portfolioname,
      portfolio_image: portfolioimage,
      portfolio_description: portfoliodescription,
      portfolio_link: portfoliolink
    };

    try {
      axios.post(`${URL}/create`, newPortfolio).then(() => {
        console.log("Successfully created portfolio section");
        setSuccess(true);
      });

      setTimeout(function () {
        history.push("/portfolio");
      }, 2000);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      throw err;
    }
  };

  return (
    <div className="container_portfolio">
      <h1>Add New Portfolio Section</h1>
      <form className="portfolio_form" onSubmit={submitNewPortfolio}>
      <TextField
          className={classes.textField}
          id="portfolio-name"
          label="Portfolio Section Name"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={portfolioname}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="portfolio-image"
          label="Image"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={portfolioimage}
          onChange={(b) => setImage(b.target.value)}
        />
        <TextField
          className={classes.textField}
          id="portfolio-desc"
          label="Description of Portfolio Section"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={portfoliodescription}
          onChange={(b) => setDesc(b.target.value)}
        />
        <TextField
          className={classes.textField}
          id="portfolio-link"
          label="Github Link"
          variant="outlined"
          required
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={portfoliolink}
          onChange={(b) => setLink(b.target.value)}
        />
        
        <Button type="submit" variant="outlined" color="black" boxShadow={3}>
          Add Portfolio Section
        </Button>
      </form>
      {success && (
        <Alert variant="outlined" severity="success">
          New portfolio section added!
        </Alert>
      )}
    </div>
  );
}