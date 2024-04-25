const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/register");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/register", (req,res)=>{
    res.render("register")
});
app.post("/register", async (req,res)=>{
    try{
        const password = req.body.password;
        const c_password = req.body.confirm_password;
        if(password === c_password){
            const registerUser = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirm_password: c_password
            });
            const registered = await registerUser.save();
            res.status(201).render("index");
        }else{
            res.send("Password and Confirm Password does not match.")
        }
    }catch(error){
        res.status(400).send(error);
    }
});

app.get("/login", (req,res)=>{
    res.render("login")
});
app.post("/login", async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userDetails = await Register.findOne({email:email});
        if(userDetails.password===password)
        res.status(201).render("index");
        else
        res.send("Password does not match.")
    }catch(error){
        res.status(400).send(error);
    }
});
app.listen(port, ()=> {
    console.log(`Server is running at port no. ${port}`);
});
