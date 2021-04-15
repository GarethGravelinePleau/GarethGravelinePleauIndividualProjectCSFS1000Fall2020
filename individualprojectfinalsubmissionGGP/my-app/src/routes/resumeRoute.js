import express from "express";
import db from ".././database/connection";
import { stringify } from "flatted";

const resumeRoute = express.Router();

resumeRoute.get("/", (req, res) => {
    try {
      db.query(
        "SELECT resume_id, employer_name, position_name, position_desc, date FROM resume ",
        (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(result);
            res.status(200).json({ result });
            console.log("Retrieved all resume info.");
          }
        }
      );
    } catch (err) {
      throw err;
    }
  });

//Get a portfolio section listed with ID
resumeRoute.get("/:id", (req, res) => {
    try {
      let id = req.params.id;
  
      db.query(
        `SELECT * FROM resume WHERE resume_id = '${id}'`,
        (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(result);
            res.status(200).json({
              result,
            });
            console.log(`Successfully retrieved resume section ${id}.`);
          }
        }
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  });

  //Create New Portfolio Section
  resumeRoute.post("/create", async (req, res) => {
    try {
      const {
        employer_name,
        position_name,
        position_desc,
        date,
      } = req.body;
  
      let newResume = await db.query(
        "INSERT INTO resume(employer_name, position_name, position_desc, date) VALUES (?,?,?,?)",
        [
        employer_name,
        position_name,
        position_desc,
        date,
          
        ]
      );
  
      let newR = stringify(newResume);
      res.status(200).json(newR);
  
      console.log(`New Resume Section Created`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });

  //Update A Portfolio Section

  resumeRoute.put("/update/:id", async (req, res) => {
    try {
      const {
        employer_name,
        position_name,
        position_desc,
        date,
      } = req.body;
      const id = req.params.id;
      
  
      let updateResume = db.query(
        `UPDATE resume SET employer_name=?, position_name=?, position_desc=?, date=? WHERE resume_id=?`,
        [
        
        employer_name,
        position_name,
        position_desc,
        date,
        id,
        ]
      );
  
      let upResume = stringify(updateResume);
      res.status(200).json(upResume);
      console.log(`Updated resume section ${id}!`);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: err });
    }
  });
  
  //Delete Portfolio Section By ID

 resumeRoute.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query(
      "DELETE FROM resume WHERE resume_id=?",
      id,
      (err, result) => {
        if (err) {
          return res.status(400).json({ message: err });
        } else {
          console.log(
            `Deleted resume section with the ID: ${id}.`
          );
          res.send(result);
        }
      }
    );
  
    
  });
  
export default resumeRoute;