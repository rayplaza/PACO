var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
   projectName: String,
   profession: String,
   daw: String,
   date: Date,
   plugins: [pluginSchema],
   comments: [commentSchema]  
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);