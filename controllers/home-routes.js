const router = require('express').Router();
const {Post, User, Comment} = require('../models')

router.get('/', (req, res) => {
  Post.findAll({
    include: [
      {
        model: Comment,
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      console.log(dbPostData)
      console.log(req.session)
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }))
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  console.log('in the login get route')
  console.log(req.session)
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})



router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'text',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' })
      return;
    }

    const post = dbPostData.get({ plain: true })
    res.render('single-post', { post });
  })
  .catch(err =>{ 
    console.log(err);
    res.status(500).json(err);
  });

});


router.get('/logout',  (req, res) => {
  res.render('homepage')
})



module.exports = router;