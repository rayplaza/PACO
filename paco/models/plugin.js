var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pluginSchema = new Schema( {
    manufacturer: String,
    pluginName: String,
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    type: {
        type: String,
        enum: ['AmpsPedals', 'Delay', 'Distortion', 'Dynamics', 'EQ', 'Filter', 'Imaging', 'Pitch', 'Reverb', 'Specialized', 'Utility', 'Metering', 'Multi-Effects', 'Other']
    },
    version: String,
    usedOn: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Plugin', pluginSchema);