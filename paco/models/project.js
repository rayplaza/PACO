var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectSchema = new Schema({
   user: String,
   email: String,
   googleId: String,
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


