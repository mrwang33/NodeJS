var express = require('express');
var multer = require('multer');

var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images');
        },
        filename: function (req, file, cb) {
            //file.originalname上传文件的原始文件名
            var changedName = (new Date().getTime())+'-'+file.originalname;
            cb(null, changedName);
        }
    })
});

module.exports = upload;