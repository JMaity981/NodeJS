
const bioData = {
    name : "Jayanta",
    age : 26,
    address : "Tamluk, WB"
};

// 1. Convert to json
const jsonData = JSON.stringify(bioData);


// 2. JSON data write to file
const fs = require("fs");
fs.writeFileSync("json.txt",jsonData);
// 3. Read the file Data
const readFile = fs.readFileSync("json.txt");

// 4. Read JSON data convert to Object
const objData = JSON.parse(readFile);

// 5. console this object
console.log(objData);


/* Asycronous File System
fs.writeFile("biodata.json",jsonData,(err)=>{
    console.log('writed');
    fs.readFile("biodata.json","utf-8",(err,data)=>{
        console.log(JSON.parse(data));
    });
});
*/