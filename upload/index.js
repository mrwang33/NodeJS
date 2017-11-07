var start = require("./start");
var requestHandlers = require("./requestHandlers");

var handler = {
				"/":requestHandlers.start,
				"/upload":requestHandlers.upload
			};

start.start(handler);