const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'First Comment on Post 1 (by user 2).',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text:
      'First Comment on Post 2 (by user 1).',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'First Comment on post 4 (by user 2).',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text:
      'First comment on Post 4 (by user 1).',
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: 'Second comment on post 1 by user 3.',
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
