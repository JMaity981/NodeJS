const http = require("http");

const server = http.createServer((req,res)=>{
    // res.end("Welcome to KHANSAR");
    console.log(req.url);
    if(req.url=="/"){
        res.end("This is Home Page");
    }else if(req.url=="/about"){
        res.end("This is About Us Page");  
    }else if(req.url=="/contact"){
        res.end("This is Contact Us Page");  
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 Error page. This Page doesn't exists</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});