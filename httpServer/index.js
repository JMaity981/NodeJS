const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    
    // res.end("Welcome to KHANSAR");
    const data = fs.readFileSync(`${__dirname}/match.json`,"utf-8");
    const objData = JSON.parse(data);
    console.log(objData);
    if(req.url=="/"){
        res.end("This is Home Page");
    }else if(req.url=="/about"){
        res.end("This is About Us Page");  
    }else if(req.url=="/contact"){
        res.end("This is Contact Us Page");  
    }else if(req.url=="/api"){
        res.writeHead(200, {"Content-type": "application/json"});
        // res.end(objData[5].status);
        res.end(data);
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 Error page. This Page doesn't exists</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});