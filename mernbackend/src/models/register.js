const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userScheema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    gender: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true,
        unique:true
    },
    age: {
        type:Number,
        required:true
    },
    password: {
        type:String,
        required:true,
    },
    confirm_password: {
        type:String,
        required:true,
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});
//Genarate Token
userScheema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
        res.send("the error part " + error);
        console.log("the error part " + error);
    }
}

// Convert password to Hash
userScheema.pre("save", async function(next) {
    if(this.isModified("password")){
        // console.log(`Current Password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        // console.log(`Current bcrypt Password is ${this.password}`);
        this.confirm_password = await bcrypt.hash(this.password,10);
    }
    next();
})

const Register = new mongoose.model("Register", userScheema);

module.exports = Register;