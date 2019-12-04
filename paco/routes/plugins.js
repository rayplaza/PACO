var express = require('express');
 var router = express.Router();
 var pluginsCtrl = require('../controllers/plugins');
 
 router.get('/projects/:id/plugins/new', pluginsCtrl.new);
 router.post('/projects/:id/plugins', pluginsCtrl.create);
 router.get('/projects/:id/plugins/:pid/edit', pluginsCtrl.edit);
 router.put('/projects/:id/plugins/:pid', pluginsCtrl.update);
 
 module.exports = router;