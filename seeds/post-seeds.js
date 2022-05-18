const { Post } = require('../models');

const postData = [
    {
        title: 'Why the sky is blue',
        content: 'Gases and particles in the Earth atmosphere scatter sunlight in all directions. Blue light is scattered more than other colors because it travels as shorter, smaller waves.',
        created_at: newDate()
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;