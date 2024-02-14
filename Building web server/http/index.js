// console.log('http module')

const http = require('http');
// const myServer = http.createServer((req, res) => {
//     console.log("Server created.")
//     res.write("Hello")
//     res.end("Execute now.")
// });

// myServer.listen(1552, () => {
//     console.log('server listening');
// });


const server2 = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") res.end("<h1>This is homepage")
    else if (req.url == '/about') res.end('<h1> This is about page')
    else {res.end("<h1> Page not supported!")}
});

server2.listen(2323, () => {
    console.log('server listening');
});
