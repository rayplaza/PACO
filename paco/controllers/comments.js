var Project = require('../models/project');

module.exports = {
    create
};




function create(req, res) {
    Project.findById(req.params.id, function(err, project) {
        req.body.userName = req.user.name
        project.comments.push(req.body);
      project.save(function(err) {
        res.redirect(`/projects/${project._id}`);
      });
    });
  }

  