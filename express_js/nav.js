const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome to My Home Page");
});

app.get('/about',(req,res)=>{
    res.status(200).send("Welcome to My About Page");
});

app.get('/contact',(req,res)=>{
    res.send("Welcome to My Contact Page");
});


app.listen(port,()=>{
    console.log(`Listening to Port No. ${port}`);
})