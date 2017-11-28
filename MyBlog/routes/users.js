var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    res.send("hello darkness my old friend");
})

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  res.render("index",{title : req.params.name});
});

module.exports = router;
