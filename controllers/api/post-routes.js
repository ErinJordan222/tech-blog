const router = require('express').Router();
const withAuth = require('../../utils/auth')
const {Post, User, Comment} = require('../../models')


router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        created_at: new Date(),
        user_id: req.session.user_id
    })
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})


router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        text: req.body.text
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => {
        res.json(dbPostData)
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
})

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( dbPostData => {
        res.json(dbPostData)
    })
    .catch( err => {
        console.log(err);
        res.status(500).json(err)
    })
})

module.exports = router