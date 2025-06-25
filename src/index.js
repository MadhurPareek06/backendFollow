// import dotenv from "dotenv"
// import connectDB from "./db/index.js";


// dotenv.config({
//     path:'./env'
// })
// connectDB()

const dotenv = require("dotenv");
const connectDB = require("./db/index");

dotenv.config({
  path: "./.env",
});

connectDB();
