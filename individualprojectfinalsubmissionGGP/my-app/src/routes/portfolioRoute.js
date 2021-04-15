import express from "express";
import db from ".././database/connection";
import { stringify } from "flatted";

const portfolioRoute = express.Router();

portfolioRoute.get("/", (req, res) => {
    try {
      db.query(
        "SELECT portfolio_id, portfolio_name, portfolio_image, portfolio_description, portfolio_link FROM portfolio ",
        (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(result);
            res.status(200).json({ result });
            console.log("Retrieved all portfolio info.");
          }
        }
      );
    } catch (err) {
      throw err;
    }
  });

//Get a portfolio section listed with ID
portfolioRoute.get("/:id", (req, res) => {
    try {
      let id = req.params.id;
  
      db.query(
        `SELECT * FROM portfolio WHERE portfolio_id = '${id}'`,
        (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(result);
            res.status(200).json({
              result,
            });
            console.log(`Successfully retrieved portfolio section ${id}.`);
          }
        }
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  //Create New Portfolio Section
  portfolioRoute.post("/create", async (req, res) => {
    try {
      const {
        portfolio_name,
        portfolio_image,
        portfolio_description,
        portfolio_link,
      } = req.body;
  
      let newPortfolio = await db.query(
        "INSERT INTO portfolio(portfolio_name, portfolio_image, portfolio_description, portfolio_link) VALUES (?,?,?,?)",
        [
        portfolio_name,
        portfolio_image,
        portfolio_description,
        portfolio_link,
          
        ]
      );
  
      let newP = stringify(newPortfolio);
      res.status(200).json(newP);
  
      console.log(`New Portfolio Section Created`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });

  //Update A Portfolio Section

  portfolioRoute.put("/update/:id", async (req, res) => {
    try {
      const {
        portfolio_name,
        portfolio_image,
        portfolio_description,
        portfolio_link,
      } = req.body;
      const id = req.params.id;
      
  
      let updatePortfolio = db.query(
        `UPDATE portfolio SET portfolio_name=?, portfolio_image=?, portfolio_description=?, portfolio_link=? WHERE portfolio_id=?`,
        [
        
        portfolio_name,
        portfolio_image,
        portfolio_description,
        portfolio_link,
        id,
        ]
      );
  
      let upPortfolio = stringify(updatePortfolio);
      res.status(200).json(upPortfolio);
      console.log(`Updated portfolio section ${id}!`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });
  
  //Delete Portfolio Section By ID

  portfolioRoute.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      "DELETE FROM portfolio WHERE portfolio_id=?",
      id,
      (err, result) => {
        if (err) {
          return res.status(400).json({ message: err });
        } else {
          console.log(
            `Deleted portfolio section with the ID: ${id}.`
          );
          res.send(result);
        }
      }
    );
  
    
  });
  
export default portfolioRoute;