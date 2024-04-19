const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routes/student");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

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



app.listen(port,()=>{
    console.log(`conection is setup at ${port}`);
})