const se = require('../sequelizeConfig');
const Sequelize = require('sequelize');

var user = se.define('user',{
        id: {
            type: Sequelize.BIGINT(100),
            primaryKey: true
        },
        username: Sequelize.STRING(100),
        password: Sequelize.STRING(10)
    },{
        timestamps: false,
        freezeTableName: true
    });

module.exports = user;