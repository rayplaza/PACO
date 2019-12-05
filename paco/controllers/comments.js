var Project = require('../models/project');

module.exports = {
    create
};




function create(req, res) {
    Project.findById(req.params.id, function(err, project) {
        req.body.userName = req.user.name
        console.log("COMMENT: ", req.body)
        project.comments.push(req.body);
      project.save(function(err) {
          console.log("SAVED PROJECT: ", project)
        res.redirect(`/projects/${project._id}`);
      });
    });
  }
