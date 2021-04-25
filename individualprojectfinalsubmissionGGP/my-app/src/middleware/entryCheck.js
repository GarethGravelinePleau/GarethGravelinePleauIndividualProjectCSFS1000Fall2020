export default (req,res,next)=> {
    let errors = [];
    let newEntry = req.body;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let email = req.body.entry_email;
    if (!newEntry.entry_name) {
        errors.push(" name");
      } 
      if (!newEntry.entry_email || !emailPattern.test(email)) {
        errors.push(" email");
      }
      if (!newEntry.entry_number) {
        errors.push(" phoneNumber");
      }
      if (!newEntry.entry_content){
        errors.push(" content");
      }
      if  (errors.length >0) {
          return res.status(400).json({message: "validation error", errors})
      }
      next()
    };

    //validates new entry submission
    