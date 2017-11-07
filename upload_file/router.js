function router(path,handler,response,request) {
	if(typeof handler[path]==="function") {
		handler[path](response,request);
	} else {
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("not found");
		response.end();
	}
}

exports.router = router;