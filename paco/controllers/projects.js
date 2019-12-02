var Project = require('../models/project');


module.exports = {
    index,
    new: newProject,
    create,
    show
}

function show(req, res) {
    Project.findById(req.params.id, function(err, project) {
        res.render('projects/show', {title: 'Project Detail', project});
    });
}

function index(req, res) {
    Project.find({}, function(err, projects) {
        res.render('projects/index', {projects, title: "Projects List", user: req.user});
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

