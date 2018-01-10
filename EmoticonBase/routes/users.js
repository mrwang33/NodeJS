var express = require('express');
var router = express.Router();
var user = require('../database/model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*user.user.create({
      username : "test",
      password : "test"
  }).then(function (p) {
      console.log('created.' + JSON.stringify(p));
  }).catch(function (err) {
      console.log(err);
  });*/
  var result = '';
  user.user.findAll().then(function (p) {
      result = JSON.stringify(p);
      res.send(result);
  });
});

module.exports = router;
