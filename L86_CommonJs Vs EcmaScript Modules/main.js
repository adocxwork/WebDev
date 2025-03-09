// const { createServer } = require('node:http');
// const fs = require('fs');
// import http from "http"

// "type":"commonjs", "module"

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>hello world</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



// named exports
// import {a,b,c} from "./mymodule.js"
// console.log(a,b,c);


// default exports
// import obj from "./mymodule.js"
// console.log(obj);


const a = require("./mymodule2.js")
console.log(a);
