const mongoose = require("mongoose");

//connection creation and  creation a new db
mongoose.connect("mongodb://localhost:27017/technical")
.then( () => console.log("Connection Successfull..."))
.catch( (err) => console.log(err) );