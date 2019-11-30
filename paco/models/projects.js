var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
   projectName: String,
   profession: String,
   daw: String,
   // to be thier own schema
   plugins: [String],
   comments: [String]  
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);