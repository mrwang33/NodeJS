var http = require("http");
var url = require("url");
var router = require("./router");

function start(handler) {
	http.createServer(function(req,res){
		router.router(req.url,handler,res,req);
	}).listen(8888);
}


exports.start = start;