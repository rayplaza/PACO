var express = require('express');
var router = express.Router();
var passport = require('passport');
var Project = require('../models/project');
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'P.A.C.O.',
     user: req.user,
     name: req.query.name
    });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/projects',
    failureRedirect : '/index'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/index');
});


module.exports = router;
