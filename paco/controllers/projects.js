var Project = require('../models/projects');


module.exports = {
    new: newProject
}

function newProject(req, res) {
    res.render('projects/new');
}