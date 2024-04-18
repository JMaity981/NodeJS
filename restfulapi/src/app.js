const express = require("express");
require("./db/conn");
const Student = require("./models/students")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

/*app.post("/students",(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
    // res.send("Student Inserted Successfully");
})*/

//Create new Student
app.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

//Get All Students Data
app.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.status(500).send(e);
    }
})

//Get Studentby Id
app.get("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentsData = await Student.findById(_id);
        console.log(studentsData);
        if(!studentsData){
            return res.status(400).send();
        }
        else{
            res.send(studentsData);
        }
    }catch(e){
        res.status(500).send(e);
    }
})

//Delete Student By Id
app.delete("/students/:id",async(req,res)=>{
    try{
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`conection is setup at ${port}`);
})