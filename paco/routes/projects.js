var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects');

router.get('/new', projectsCtrl.new);


module.exports = router;

