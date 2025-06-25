// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`Connect Successfuly!!! ${connectionInstance.connection.host}`)
//     }
//     catch (error) {
//         console.log("MONGO DB connection error ", error);
//         process.exit(1);
//     }
// }

// export default 

const mongoose = require("mongoose");
const { DB_NAME } = require("../constants");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Connected Successfully!!! ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO DB connection error", error);
    process.exit(1);
  }
};

module.exports = connectDB;
