//console.log("Hello world")

var http=require('http');
var dt = require('./myfirstmodule')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The current time is :" + dt.myDateTime());
    res.end('Hello world!');
}).listen(8080);

console.log("Listening on 8080")
