var path = require("path");
var express = require("express");
var app = express();

var indexRouter = require("./router/index");
var usersRouter = require("./router/users");
//设定模板引擎
app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs


app.use("/",indexRouter);
app.use("/users",usersRouter);
app.listen(8888);