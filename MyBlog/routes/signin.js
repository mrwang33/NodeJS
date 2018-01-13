var express = require('express');
var router = express.Router();
var checkNotLogin = require('../middlewares/check').checkNotLogin;
var UserModle = require('../models/users');

/* GET 登录页. */
router.get('/', checkNotLogin,function(req, res, next) {
    res.render('signin', { title: "express" });
});

router.post('/',function (req, res, next) {
    //登录操作
    UserModle.getUserByUsername(req.body.username).then(function (user){
        console.log(user.username);
    });
    console.log(req.body.username);
    console.log(req.body.password);
    if (req.body.password == user.password) {
        res.send("signin success");
    } else {
        res.send("signin failed");
    }
});

module.exports = router;
