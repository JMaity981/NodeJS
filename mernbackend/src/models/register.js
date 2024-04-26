const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    }
});

userScheema.pre("save", async function(next) {
    if(this.isModified("password")){
        console.log(`Current Password is ${this.password}`);
        this.password = await bcrypt.hash(this.password,10);
        console.log(`Current bcrypt Password is ${this.password}`);

        this.confirm_password = undefined;
    }
    next();
})

const Register = new mongoose.model("Register", userScheema);

module.exports = Register;