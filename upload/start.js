var http = require("http");
var url = require("url");
var router = require("./router");

function start(handler) {
	http.createServer(function(req,res){
		req.setEncoding("utf8");
		var postData = "";
		req.addListener("data",function(dataChunk){
			postData += dataChunk;
			console.log("postData is :"+postData);
		});
		req.addListener("end",function(){
			router.router(req.url,handler,res,postData);
		});
		
	}).listen(8888);
}


exports.start = start;