const User = require('../lib/mongo').User

function createUser(user) {
    User.create(user).exec();
}

module.exports = {
    createUser : createUser
};