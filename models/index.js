const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: "id",
    foreignKeyConstraint: false
})


Comment.belongsTo(Post, {
    foreignKey: "id",
    foreignKeyConstraint: false
})



Post.hasMany(Comment, {
    foreignKey: "post_id"
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    foreignKeyConstraint: false
})



User.hasMany(Comment, {
    foreignKey: "user_id"
})

module.exports = {
    Post,
    User,
    Comment,
};