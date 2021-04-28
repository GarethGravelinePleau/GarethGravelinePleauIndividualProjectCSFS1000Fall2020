

import express, { response } from 'express';
import portfolioRoute from "./routes/portfolioRoute"
import resumeRoute from "./routes/resumeRoute"
import entriesRoute from "./routes/entriesRoute"
import usersRoute from "./routes/usersRoute"


const router = express.Router(); 


router.use("/portfolio", portfolioRoute);
router.use("/resume", resumeRoute);
router.use("/admin", resumeRoute);
router.use("/entries", entriesRoute);
router.use("/users", usersRoute);


router.get("*", (req, res, next) => {
    let err = new Error("typed wrong URL");
    next(err);
});




export default router;