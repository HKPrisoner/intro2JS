//console.log("Hello world")

var http=require('http');
var dt = require('./myfirstmodule')
var url = require('url')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.write("The current time is :" + dt.myDateTime());
//    res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
//    res.end('Hello world!');
}).listen(8080);

console.log("Listening on 8080")
