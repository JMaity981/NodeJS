const chalk = require("chalk");

console.log(chalk.blue("Hello world"));

console.log(chalk.blue.underline.inverse("Hello world"));

console.log(chalk.green.inverse("Success"));

console.log(chalk.red.inverse("Error"));


const validator = require("validator");
const res = validator.isEmail('jayanta@cloudoter.com'); //=> true
const res2 = validator.isEmail('jayanta@com'); //=> false
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
console.log(res2 ? chalk.green.inverse(res2):chalk.red.inverse(res2));