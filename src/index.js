// import dotenv from "dotenv"
// import connectDB from "./db/index.js";


// dotenv.config({
//     path:'./env'
// })
// connectDB()

const dotenv = require("dotenv");
const connectDB = require("./db/index");
const { app } = require("./app");

dotenv.config({
  path: "./.env",
});

connectDB()
.then(() => {
  app.listen(process.env.PORT || 4000, () => {
    console.log(`Listening on the port: ${process.env.PORT}`);
  })
})
.catch((error) => {
  console.log("MONGODB connection failed", error)
})