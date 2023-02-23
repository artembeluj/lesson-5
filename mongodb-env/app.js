const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const {DB_HOST} = process.env;

mongoose.set('strictQuery', false);

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database connect"))
    .catch(error => console.log(error.message))
