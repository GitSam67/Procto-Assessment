const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const taskRouter = require("./taskRouter");
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config({path:"./config.env"});
require("./database/connect");

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello server...");
});

app.use(taskRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});