

import express, { response } from 'express';
import entriesDB from '../data/entries.json'
import usersDB from '../data/users.json';
import { v4 as uuidv4 } from 'uuid';
import entryChecker from "./middleware/entryCheck";
import verifyToken from "./middleware/jwtVerify";
import userChecker from "./middleware/newUserCheck";
import {readEntries, readUsers, writeEntries, writeUsers} from "../src/util/jsonHandler"
import portfolioRoute from "./routes/portfolioRoute"
import resumeRoute from "./routes/resumeRoute"


const router = express.Router(); 
let jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/contact_form/entries', entryChecker,  (req, res) => {
  let newEntry =  {

        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        content: req.body.content
    };
    readEntries().then((entriesArray) => {
    entriesArray.push(newEntry);
    writeEntries(entriesArray);
    return res.status(201).json(newEntry);
    });
    
    
});

router.post('/users', userChecker,(req, res)=> {
    let newUser = {

        id: uuidv4(),
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    };
    readUsers().then((usersArray) => {
    bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
    newUser.password=hash;
    usersArray.push(newUser);
    console.log(newUser)
    writeUsers(usersArray);
    
    return res.status(201).json({id: newUser.id, name: newUser.name, email: newUser.email});
    });
});
    
});

router.post('/auth', async  ( req, res)=>{
    let bodyEmail = req.body.email;
    let userTwo = usersDB.find((Obj)=>Obj.email == bodyEmail);
    if (userTwo == null || userTwo == undefined){
        return res.status(401).json({message: "incorrect credentials provided"});
    }
    try {
    const validPassword = await bcrypt.compare(req.body.password, userTwo.password); 
    
    
    if (!validPassword) {return res.status(401).json({message: "incorrect credentials provided"})};
    
    } catch (err){res.status(401).json({message: "incorrect credentials provided"})}
    
    
    let registeredUser = {
        email: req.body.email,
        password: req.body.password
    }

    let token =jwt.sign(registeredUser, `${process.env.privateKey}`,{ expiresIn: '1hr' });
    
    return res.status(200).json({token});
    
});


router.get('/contact_form/entries', verifyToken, (req, res)=>{
    
    readEntries().then((entries) => {
    return res.status(200).json(entries);
    })
});

router.get('/contact_form/entries/:id', verifyToken, (req,res)=>{
    
  let paramsId = req.params.id;
  let entry = entriesDB.find((entryObj) => entryObj.id == paramsId);
  let entryIndex = entriesDB.findIndex((entryObj) => entryObj.id == paramsId);
  readEntries().then((entriesDB) => {
  if (entry == null || entry == undefined)
  {
      return res.status(404).json(`Cannot find ${req.params.id}`);
  }

  else {
  return res.status(200).json(entriesDB[entryIndex]);
  };
})

});

router.use("/portfolio", portfolioRoute);
router.use("/resume", resumeRoute);

router.get("*", (req, res, next) => {
    let err = new Error("typed wrong URL");
    next(err);
});




export default router;