const User = require('../lib/mongo').User

function createUser(user) {
    User.create(user).exec();
}

function getUserByUsername(name) {
    return User.findOne({name:name}).exec();
}

module.exports = {
    createUser : createUser,
    getUserByUsername : getUserByUsername
};