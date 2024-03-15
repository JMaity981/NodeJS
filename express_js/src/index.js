const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 8000;

//built in  middleware

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

//to set the view engine
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
// app.use(express.static(staticPath));

//template engine route
app.get("/", (req,res)=>{
     res.render("index",{
        use_name: "HBS"
     });
});

app.get("/about", (req,res)=>{
    // res.render("about");
    console.log(req.query.name);
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=ef476f15881decd6024175bff5ca2eda`
    )
    .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        res.write(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
    })
    .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
    });
});
app.get('/about/*', (req, res)=>{
    res.render("404",{
        errorcoment : "About Us Page couldn't be found"
    });
});
// app.get ("/" ,(req,res)=>{
//     res.send("hello");
// });

app.get('*', (req, res)=>{
    res.render("404",{
        errorcoment : "Page couldn't be found"
    });
});


app.listen(port, ()=>{
    console.log(`Listening the port at ${port}`);
})