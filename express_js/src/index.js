const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

//built in  middleware

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);

// app.use(express.static(staticPath));

//template engine route
app.get("/", (req,res)=>{
     res.render("index",{
        use_name: "HBS"
     });
});

app.get("/about", (req,res)=>{
    res.render("about");
});

// app.get ("/" ,(req,res)=>{
//     res.send("hello");
// });



app.listen(port, ()=>{
    console.log(`Listening the port at ${port}`);
})