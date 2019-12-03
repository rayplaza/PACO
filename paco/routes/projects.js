var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.post('/', isLoggedIn, projectsCtrl.create);
router.delete('/:id', isLoggedIn, projectsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }


module.exports = router;



