const mongoose = require("mongoose");

const {DB_HOST} = require("./config")

console.log(process.env);

mongoose.set('strictQuery', false);

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database connect"))
    .catch((error)=> console.log(error.message))