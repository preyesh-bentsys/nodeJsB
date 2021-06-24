// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

const port = process.env.PORT || 8000;
 
// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
 
// Testing database connection 
try {
    await db.authenticate();

    db.sync();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
    console.log('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
 
// listen on port
app.listen(port, () => console.log('Server running at http://localhost:5000'));