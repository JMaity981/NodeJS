const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from the Express JS");
});
app.get("/about",(req,res)=>{
    res.send("Hello from the About Us");
});
app.listen(8000, ()=>{
    console.log("port at 8000")
})