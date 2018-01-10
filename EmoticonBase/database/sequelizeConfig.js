const config = require('../config/config.js');
const Sequelize = require('sequelize');

// 初始化 sequelize
var se = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

module.exports.se = se;