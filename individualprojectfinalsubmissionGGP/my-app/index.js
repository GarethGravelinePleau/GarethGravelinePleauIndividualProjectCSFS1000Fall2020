
require('dotenv').config();

import express from 'express'
import routes from './src/routes';
import errorHandler from "./src/middleware/errorHandler";
import db from "./src/database/connection.js";
import cors from "cors";
const app = express()
const port = `${process.env.PORT}`
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use(errorHandler);
export default app.listen(port, function () {
    console.log(`Express server listening on port ${process.env.PORT}.`);
  });
  

