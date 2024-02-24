const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",()=>{
    console.log("Your Name is JAYANTA");
});

event.on("sayMyName",()=>{
    console.log("Your Name is JAYANTA MAITY");
});

event.on("sayMyName",()=>{
    console.log("Your Name is J. MAity");
});

event.emit("sayMyName");

//Event with the Callback parameter
event.on("nameAge",(name,age)=>{
    console.log(`My Name is ${name}. I am ${age} years old.`);
});
event.emit("nameAge","JAyanta",26);