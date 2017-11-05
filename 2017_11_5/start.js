var http = require("http");
var url = require("url");
var router = require("./router");

function start() {
	http.createServer(function(req,res){
		router.router(req.url);
		res.write("hello NodeJS");
		res.end();
	}).listen(8888);
}


exports.start = start;