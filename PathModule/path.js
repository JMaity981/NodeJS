const path = require("path");

console.log("dirname => " + path.dirname("D:/NodeJS/PathModule/path.js"));

console.log("extname => " + path.extname("D:/NodeJS/PathModule/path.js"));

console.log("basename => " + path.basename("D:/NodeJS/PathModule/path.js"));

const parse=path.parse("D:/NodeJS/PathModule/path.js");
console.log("parse => ");
console.log(parse);
console.log("root => " + parse.root);