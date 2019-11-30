var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema( {
    name: String,
    email: String,
}, {
    timestamps: true
});

var projectSchema = new Schema({
   user: [userSchema],
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


