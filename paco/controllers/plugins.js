var Plugin = require('../models/plugin');
var Project = require('../models/project');
 
module.exports = {
  new: newPlugin,
  create
};

function create(req, res) {
    req.body.project = req.params.id
    Plugin.create(req.body, function(err, plugin) {
        res.redirect(`/projects/${req.params.id}`);
    });
}

function newPlugin(req, res) {
  Project.findById(req.params.id, function(err, project) {
    res.render('plugins/new', {
      title: 'Add Plugins',
      project
    });
  })
}

