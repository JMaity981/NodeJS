const express = require("express");
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.write("<h1>Welcome to My Home Page<h1>");
    res.write("<h1>Welcome Page<h1>");
    res.send();
});

app.get('/about',(req,res)=>{
    res.status(200).send("Welcome to My About Page");
});

app.get('/contact',(req,res)=>{
    res.send("Welcome to My Contact Page");
});

app.get('/temp',(req,res)=>{
    res.json([
        {
            temp : 14,
            type : "Cloud"
        },
        {
            temp : 20,
            type : "Sunny"
        },
        {
            temp : 12,
            type : "Rainy"
        },
    ]);
});

app.listen(port,()=>{
    console.log(`Listening to Port No. ${port}`);
})