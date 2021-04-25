import express from "express";
import db from ".././database/connection";
import { stringify } from "flatted";

const usersRoute = express.Router(); 
let jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const saltRounds = 10;

usersRoute.post("/register",async function(req,res){    
    const password = req.body.users_password;    
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    let usersid={       
    "users_name":req.body.users_name,            
    "users_password":encryptedPassword,
    "users_email":req.body.users_email  
    }        
    db.query('INSERT INTO users SET ?',usersid, function (error, results, fields) {      
    if (error) {        
    res.send({          
    "code":400,          
    "failed":"error occurred",          
    "error" : error})      
    } else {        
    res.send({          
    "code":200,          
    "success":"user registered sucessfully"            
    });        
    }    
    });  
})

usersRoute.post ("/login", async function(req,res){
    var email= req.body.users_email;
    var password = req.body.users_password;
    db.query('SELECT * FROM users WHERE users_email = ?',[email], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].users_password)
          if(comparision){
            let registeredUser = {
                email: req.body.users_email,
                password: req.body.users_password
            }
        
            let token =jwt.sign(registeredUser, `${process.env.privateKey}`,{ expiresIn: '1hr' });
            console.log({token});
            return res.status(200).json({token});
            
          }
          else{
            res.status(400).json({message:"credentials don't match"})
           
          }
        }
        else{
          res.status(400).json({message:"that email does not exist"})
        }
      }
      });
  })


export default usersRoute;
