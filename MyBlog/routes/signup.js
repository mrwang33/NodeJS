var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var UserModle = require('../models/users');

/* GET 登录页. */
router.get('/', checkNotLogin,function(req, res, next) {
    res.render('signup', { title: "express" });
});

router.post('/',function (req, res, next) {
    //注册操作
    const username = req.body.username;
    const password = req.body.password;
    var user = {
        name : username,
        password : password
    }
    UserModle.createUser(user);
    next();
})

module.exports = router;
