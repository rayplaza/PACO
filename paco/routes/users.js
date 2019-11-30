var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/new', usersCtrl.new);
router.post('/', usersCtrl.create);

module.exports = router;
