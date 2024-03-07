const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

//built in middleware
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.get ("/" ,(req,res)=>{
    res.send("hello");
});



app.listen(port, ()=>{
    console.log(`Listening the port at ${port}`)
})