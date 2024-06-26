require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const auth = require("./middleware/auth");
require("./db/conn");
const Register = require("./models/register");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res)=>{
    res.render("index")
});

app.get("/secret", auth, (req,res)=>{
    console.log(`Cookies details ${req.cookies.jwt}`);
    res.render("secret")
});
app.get("/logout", auth, async(req,res)=>{
    try{
        console.log(req.user);
        // For Single Logout
        /* req.user.tokens = req.user.tokens.filter((currentElement) => {
           return  currentElement.token != req.token;
        })*/

        // Logout for all device
        req.user.tokens = [];
        res.clearCookie("jwt");
        console.log('Logout Successfully');
        await req.user.save();
        res.render("login");
    }catch{
        res.status(500).send(error);
    }
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
            // console.log("the success part" + registerUser);
            const token = await registerUser.generateAuthToken();
            // console.log("The token part " + token);

            // Token store in cookies
            res.cookie("jwt", token,{
                expires:new Date(Date.now()+30000),
                httpOnly:true
            });
            // console.log(cookie);

            const registered = await registerUser.save();
            console.log("The page part " + registered);
            res.status(201).render("index");
        }else{
            res.send("Password and Confirm Password does not match.")
        }
    }catch(error){
        console.log("error is "+error);
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
        const passwordMatch = await bcrypt.compare(password,userDetails.password);

        const token = await userDetails.generateAuthToken();
        // console.log("The token part " + token);

        res.cookie("jwt", token,{
            expires:new Date(Date.now()+50000),
            httpOnly:true,
            // secure:true
        });
        console.log(`Cookies details ${req.cookies.jwt}`);
        // if(userDetails.password===password)
        if(passwordMatch){
            res.status(201).render("index");
        }else
            res.send("Password does not match.")
    }catch(error){
        res.status(400).send(error);
    }
});

const securePassword = async (passwordVal) =>{
    const passwordHash =  await bcrypt.hash(passwordVal,10);
    console.log(passwordHash);

    const passwordMatch = await bcrypt.compare("jayanta!23",passwordHash);
    console.log(passwordMatch);
}
// securePassword("Jayanta!23");

const createToken = async() => {
    //Secret key - minimum 32 charecter
    const secret_key="mynameisjayantantamaityjayantamaity";
    const token = await jwt.sign({_id:"662a48be1fba7fd9a3e9fde4"}, secret_key, {expiresIn:"2 seconds"});
    console.log(token);

    const userVerify = await jwt.verify(token, secret_key);
    console.log(userVerify);
}
// createToken();

app.listen(port, ()=> {
    console.log(`Server is running at port no. ${port}`);
});
