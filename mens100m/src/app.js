const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.post("/mens",async(req,res)=>{
    try{
        const addRecord = new MensRanking(req.body);
        console.log(req.body);
        const createData = await addRecord.save();
        res.status(201).send(createData);
    }catch(e){
        res.status(400).send(e);
    }
})

app.get("/",async(req,res)=>{
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})