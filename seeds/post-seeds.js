const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1.',
    content: 'This is the first post. Posted by user1',
    user_id: 1,
  },
  {
    title: 'Post 2.',
    content: 'This is the second post. Posted by user2',
    user_id: 2,
  },
  {
    title: 'Post 3',
    content: 'This is the third post. Posted by user3.',
    user_id: 3,
  },
  {
    title: 'Post 4.',
    content: 'Second post by user 1',
    user_id: 1,
  },
  {
    title: 'Post 5.',
    content: 'Second post by user3.',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;