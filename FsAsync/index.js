const fs = require("fs");

fs.writeFile('read.txt',"Welcome to Tamluk",(err)=>{
    console.log("File is created");
    console.log(err);
});

fs.appendFile('read.txt',",West Bengal",err=>{
    console.log("append Successfully");
    console.log(err);
});

fs.readFile('read.txt',"UTF-8",(err,data)=>{
    console.log(data);
    console.log(err);
});

// fs.rename('read.txt',"reading.docx",(err)=>{
//     console.log("change successfully");
//     console.log(err);
// });