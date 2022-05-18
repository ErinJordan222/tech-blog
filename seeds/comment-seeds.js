const { Comment } = require('../models');
const commentData = [
    {
        comment_text: 'The sky is blue',
        post_id: 1,
        user_id: 1,
    },
    {
        comment_text: 'Harry Potter books are great',
        post_id: 2,
        user_id: 2,

    },
    {
        comment_text: 'Coding is cool!',
        post_id: 3,
        user_id: 3,
    },
    ];

    const seedComments = () => Comment.bulkCreate(commentData);

    module.exports = seedComments;
