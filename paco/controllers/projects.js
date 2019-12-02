var Project = require('../models/project');


module.exports = {
    new: newProject,
    create
}

function create(req, res) {
    var project = new Project(req.body);
    project.save(function(err) {
        if (err) return res.render('projects/new');
        res.redirect('/projects');
    });
}

function newProject(req, res) {
    res.render('projects/new');
}

