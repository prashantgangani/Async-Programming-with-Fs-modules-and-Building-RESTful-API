const http = require('http');

const server = http.createServer((req,res)=> {
      console.log("request mode :");
      if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, GET request!\n');
    } else if (req.method === 'POST') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, POST request!\n');
    }else if(req.method === 'PUT'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, PUT request!\n');
        res.end('Hello, PUT request!\n');
    } else if(req.method === 'DELETE'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, DELETE request!\n');
    } 
    
    
    else {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Method Not Allowed\n');
    }
});

 const port = 1502;
 server.listen(port,() => { console.log("REQUEST SEND :")});

     


