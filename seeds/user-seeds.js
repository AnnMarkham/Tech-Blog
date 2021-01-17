const { User } = require('../models');

const userdata = [
  {
    username: 'newUser',
    email: 'newUser@gmail.com',
    password: 'password123',
  },
  {
    username: 'User1',
    email: 'user1@outlook.com',
    password: 'notrealpass1',
  },
  {
    username: 'User2',
    email: 'user2@outlook.com',
    password: 'password1234',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;