var express = require('express');
var router = express.Router();
var projectsCtrl = require('../controllers/projects');

router.get('/', projectsCtrl.index);
router.get('/new', projectsCtrl.new);
router.post('/', projectsCtrl.create);


module.exports = router;



