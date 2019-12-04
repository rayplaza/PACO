var Plugin = require('../models/plugin');
var Project = require('../models/project');
 
module.exports = {
  new: newPlugin,
  create,
  edit,
  update
};

function update(req, res) {
    let plugs = req.params.pid;
    let proj = req.params.id;
    let plugUpdate = req.body;
    Plugin.findByIdAndUpdate(plugs, plugUpdate, function(err, plugs){
        res.redirect(`/projects/${proj}`);
    });
}



function edit (req, res) {
    let plugs = req.params.pid
    console.log(plugs)
    Project.findById(req.params.id, function(err, project) {
        res.render(`plugins/edit`, {
            title: "Edit",
            plugs,
            project,
            user: req.user
        });
    });
}

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

