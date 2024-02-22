const bioData = {
    name : "Jayanta",
    age : 26,
    address : "Tamluk, WB"
};

console.log(bioData);
console.log(bioData.name);

//object to JSON convert
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//JSON to object convert
const objData = JSON.parse(jsonData);
console.log(objData);
