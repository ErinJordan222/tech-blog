const { User } = require('../models');

const userData = [
    {
        username: 'AirJordan222',
        password: 'Chase2711!'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;