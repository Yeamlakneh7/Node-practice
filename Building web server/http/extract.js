const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    console.log("server created!");
    
    let filepath = req.url;
    console.log(filepath);
    
    if (filepath == "/") {
        filepath = 'index.html';
    }
    else if(filepath == "/index.html"){
        filepath ="index.html";
    }
    else if (filepath == "/about.html"){
        filepath = 'about.html';
    }
    
    let requestedFile = filepath;

    console.log(requestedFile)
    fs.readFile(requestedFile, 'utf-8', (err, content) => {
        
        if (err) {
            requestedFile = "notFound.html";

            fs.readFile(requestedFile,'utf-8', (err, content) => {
                res.writeHead(400, { "content-type": "text/html"});

                res.write(content);

                res.end();
            });
        }
        else {
                res.writeHead(200, {"content-type": "text/html"});
                res.write(content);
                res.end();
            
        }
    })

})


server.listen(5050, () => {
    console.log("server listening.");
})