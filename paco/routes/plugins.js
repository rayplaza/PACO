var express = require('express');
 var router = express.Router();
 var pluginsCtrl = require('../controllers/plugins');
 
 router.get('/projects/:id/plugins/new', pluginsCtrl.new);
 router.post('/projects/:id/plugins', pluginsCtrl.create);
 
 module.exports = router;