const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: "user_id"
    // foreignKeyConstraint: false
})


// Comment.belongsTo(Post, {
//     foreignKey: "post_id"
//     // foreignKeyConstraint: false
// })



Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
    // foreignKeyConstraint: false
})

User.hasMany(Comment, {
    foreignKey: "user_id"
})

module.exports = {
    Post,
    User,
    Comment,
};