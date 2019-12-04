var express = require('express');
 var router = express.Router();
 var pluginsCtrl = require('../controllers/plugins');
 
 router.get('/projects/:id/plugins/new', pluginsCtrl.new);
 router.post('/projects/:id/plugins', isLoggedIn, pluginsCtrl.create);
 router.get('/projects/:id/plugins/:pid/edit', pluginsCtrl.edit);
 router.post('/projects/:id/plugins/:pid', isLoggedIn, pluginsCtrl.update);

 function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
 
 module.exports = router;