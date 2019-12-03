var Project = require('../models/project');
var Plugin = require('../models/plugin');


module.exports = {
    index,
    new: newProject,
    create,
    show
}

function show(req, res) {
    Project.findById(req.params.id, function (err, project) {
        Plugin.find({ project: project._id }, function (err, plugins) {
            res.render('projects/show', { title: 'Project Detail', user: req.user, project, plugins });
        });
    });
}

function index(req, res) {
    Project.find({}, function (err, projects) {

        res.render('projects/index', { projects, title: "Projects List", user: req.user });
    });
}


function create(req, res) {
    var project = new Project(req.body);
    let x = req.user.name
    project.user = req.user
    project.userName = x
    project.save(function (err) {
        if (err) return res.render('projects/new');
        res.redirect('/projects');
    });
}

function newProject(req, res) {
    res.render('projects/new');
}

