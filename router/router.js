function router(path,handler) {
	if(typeof handler[path]==="function") {
		return handler[path]();
	} else {
		return "404 not found";
	}
}

exports.router = router;