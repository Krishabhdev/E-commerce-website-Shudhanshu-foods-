const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
require ('dotenv').config();
const cookieParser = require("cookie-parser");
const {connectDB} = require("./connection");

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/",(req, res)=>{
    res.send("hello krishabh")
})

app.listen(port, ()=>console.log(`Server is running on port ${port}`));

