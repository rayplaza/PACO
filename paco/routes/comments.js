var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/projects/:id/comments', isLoggedIn, commentsCtrl.create);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;

