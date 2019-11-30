var Project = require('../models/project');


module.exports = {
    new: newUser,
    create
}

function create(req, res) {
    var user = new Project(req.body);
    user.save(function(err) {
        if (err) return res.render('users/new');
        res.redirect('/users');
    });
}

function newUser(req, res) {
    res.render('users/new');
}