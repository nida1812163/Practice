const http = require('http');
var fs=require("fs");
fs.readFile('./index.html', (err, html)=>{
    if (err) throw err;
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(html);
        res.end();
    }).listen(3000, ()=>{
        console.log('The server is running on port 3000');
    })
});
