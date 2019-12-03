var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    content: String,
}, {
    timestamps: true
});

var projectSchema = new Schema({
   user: [{type: Schema.Types.ObjectId, ref: 'User'}],
   projectName: String,
   profession: String,
   daw: String,
   // to be thier own schema
   plugins: [{type: Schema.Types.ObjectId, ref: 'Plugin'}],
   comments: [commentSchema]  
}, {
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);


