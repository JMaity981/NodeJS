const fs=require('fs');

// Folder created
/*fs.mkdir("./crud",(err)=>{
    console.log("Folder created");
    console.log(err);
});*/

/*fs.writeFile("./crud/read.txt","Write a report",(err)=>{
    console.log("File created");
    console.log(err);
});*/

fs.appendFile("./crud/read.txt"," to Indian Budjet",(err)=>{
    console.log("File appended");
    console.log(err);
});

/*fs.readFile('./crud/read.txt',"UTF-8",(err,data)=>{
    console.log(data);
    console.log(err);
});*/

// File Deleted
/*fs.unlink("./crud/read.txt",(err)=>{
    console.log("File deleted");
    console.log(err);
});*/

// Folder deleted
/*fs.rmdir("./crud",(err)=>{
    console.log("Folder deleted");
    console.log(err);
});*/