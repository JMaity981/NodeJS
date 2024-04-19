const express = require("express");
// 1: Create a new router
const router = new express.Router();

const Student = require("../models/students");

// 2: We need to define the router
router.get("/jayanta",(req,res)=>{
    res.send("Hello");
});

//Create new Student
router.post("/students",async(req,res)=>{
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
})

//Get All Students Data
router.get("/students",async(req,res)=>{
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    }catch(e){
        res.status(500).send(e);
    }
})

//Get Studentby Id
router.get("/students/:id",async(req,res)=>{
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
router.delete("/students/:id",async(req,res)=>{
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

//Update Student by Id
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(updateStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;