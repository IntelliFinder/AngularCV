var http        = require('http');
var url         = require('url');
var querystring = require('querystring');
var fs          = require('fs');

http.createServer(function(request, respone){
    pathName =url.parse(request.url).pathname;
    fs.readFile(__dirname + pathName, 'utf-8',function(err, data){
        if(err){
        respone.writeHead(404, {'Content-type':'text/plan'});
        response.write('Page Was Not Found');
        console.log(err)
        response.end( );
    }else{
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        respone.writeHead(200, {'Content-type':'application/json'});
        response.write(data);
        console.log(pathName)
        response.end( );

    }
});
}).listen(7000);