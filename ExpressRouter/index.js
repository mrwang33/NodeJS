var express = require("express");
var app = express();

var indexRouter = require("./router/index");
var usersRouter = require("./router/users");

app.use("/",indexRouter);
app.use("/users",usersRouter);
app.listen(8888);