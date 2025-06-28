// import express from "express"
 
// const app = express()

// export {app}

const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const { urlencoded } = require("body-parser");

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())



module.exports = { app };
