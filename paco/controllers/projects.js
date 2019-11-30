var Project = require('../models/projects');


module.exports = {
    new: newProject,
    create
}

function create(req, res) {
    var project = new Project(req.body);
    project.save(function(err) {
        if (err) return res.render('projects/new');
        res.redirect('/projects/new');
    });
}

function newProject(req, res) {
    res.render('projects/new');
}