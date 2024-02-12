const fs = require("fs");

//Create a new file
// fs.writeFileSync("read.txt","Welcome to CLOUDOTER");

//apend text
// fs.appendFileSync("read.txt","  Append text");

//Read Data
// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

// to rename the file
fs.renameSync("readwrite.txt", "read.txt");