import express from "express";
import db from ".././database/connection";
import { stringify } from "flatted";
import entryChecker from "../middleware/entryCheck";

const entriesRoute = express.Router();

  entriesRoute.post('/create', entryChecker, async (req, res) => {
    try {
        const {
            
            entry_name,
            entry_email,
            entry_number,
            entry_content,
        } = req.body;

    let newEntry = await db.query (  
        "INSERT INTO entries(entry_name, entry_email, entry_number, entry_content) VALUES (?,?,?,?)",
  
         [ 
            entry_name,
            entry_email,
            entry_number,
            entry_content,
         ]
    );
    let newR = stringify(newEntry);
    res.status(200).json(newR);

    console.log(`New Entry`);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: err });
  }
});

entriesRoute.get("/", (req, res) => {
    try {
      db.query(
        "SELECT entry_id, entry_name, entry_email, entry_number, entry_content FROM entries ORDER BY entry_id DESC ",
        (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          } else {
            console.log(result);
            res.status(200).json({ result });
            console.log("Retrieved all entries info.");
          }
        }
      );
    } catch (err) {
      throw err;
    }
  });

export default entriesRoute;