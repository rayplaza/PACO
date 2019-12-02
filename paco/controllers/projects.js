var Project = require('../models/project');


module.exports = {
    index,
    new: newProject,
    create,
}


function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {projects, title: "HELLLO", user: req.user});
    });
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

