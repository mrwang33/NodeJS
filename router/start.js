var http = require("http");
var url = require("url");
var router = require("./router");

function start(handler) {
	http.createServer(function(req,res){
		res.write(router.router(req.url,handler));
		res.end();
	}).listen(8888);
}


exports.start = start;