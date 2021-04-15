export default (req,res,next)=> {
    let errors = [];
    let newEntry = req.body;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = req.body.email;
    if (!newEntry.name) {
        errors.push(" name");
      } 
      if (!newEntry.email || !emailPattern.test(email)) {
        errors.push(" email");
      }
      if (!newEntry.phoneNumber) {
        errors.push(" phoneNumber");
      }
      if (!newEntry.content){
        errors.push(" content");
      }
      if  (errors.length >0) {
          return res.status(400).json({message: "validation error", errors})
      }
      next()
    };

    //validates new entry submission
    