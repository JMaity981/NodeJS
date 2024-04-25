const mongoose = require("mongoose");

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

const Register = new mongoose.model("Register", userScheema);

module.exports = Register;