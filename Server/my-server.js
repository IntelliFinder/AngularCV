​let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer( function(req, res) {
    var myFile = url.parse(req.url, true);
    var filename = '.' + myFile.pathname;
    fs.readFile(filename, 'utf-8', function(err, data) {
        if (err) {
            res.writeHead(200, {'Content-Type' : 'text/html'});
            return res.end('404 Not Found');
        }
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        console.log(filename)
        res.end();
    });
}).listen(8000);//listen on non-assignable port to avoid the client and server to load on the same port

console.log('Server is Listening at port 8000');