const fs=require('fs');

// Synchronous
const sync_data=fs.readFileSync("read.txt","utf-8");
console.log(sync_data);
console.log("Sync Console");

// Asynchronous
fs.readFile("reading.docx","utf-8",(err,read)=>{
console.log(read);
});
console.log("ASync Console");