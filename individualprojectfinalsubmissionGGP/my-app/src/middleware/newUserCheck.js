export default (req,res,next)=> {
    let errors = [];
    let newUser = req.body;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = req.body.email;

    if (!newUser.name) {
        errors.push("name");
      } 
      if (!newUser.email || !emailPattern.test(email)) {
        errors.push("email");
      }
      if (!newUser.password || newUser.password.length<8) {
        errors.push("password");
      }

      if  (errors.length >0) {
          return res.status(400).json({message: "validation error", errors})
      }
      next()
    };

    //Validates posting user