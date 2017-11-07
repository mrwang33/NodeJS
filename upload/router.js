function router(path,handler,response,postData) {
	if(typeof handler[path]==="function") {
		handler[path](response,postData);
	} else {
		response.writeHead(404, {"Content-Type": "text/html"});
		response.write("not found");
		response.end();
	}
}

exports.router = router;