const mongoose = require("mongoose");
const validator = require("validator");

const studenSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }

    },
    phone:{
        type:Number,
        min:10,
        // max:10,
        unique:true
    },
    address:{
        type:String,
        required:true
    }
})
//Create a new Collection
const Student= new mongoose.model('Student', studenSchema);
module.exports = Student;
