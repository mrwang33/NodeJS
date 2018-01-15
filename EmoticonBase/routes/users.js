var express = require('express');
var router = express.Router();
var user = require('../database/model/user');
var upload = require('../plugin/upload');

/* GET users listing. */
router.get('/', function (req, res, next) {
    /*user.user.create({
     username : "test",
     password : "test"
     }).then(function (p) {
     console.log('created.' + JSON.stringify(p));
     }).catch(function (err) {
     console.log(err);
     });*/
    var result = '';
    user.findAll().then(function (p) {
        // result = JSON.stringify(p);
        res.render('user', {title: p});
    });
});

router.post('/upload/single', upload.single('singleFile'),
    function (req, res) {
        console.log(req.file);
        res.render('index',{title:req.file.filename});
    }
);

router.get('/upload/single', function (req, res) {
        res.render('upload');
    }
);

module.exports = router;
