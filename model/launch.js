var mongoose = require('mongoose')

var launchSchema = new mongoose.Schema({
    rocket_name: String,
    land_success: Boolean,
    reused: Boolean,
    with_reddit: Boolean,
});

var Launch = mongoose.model('Launch', launchSchema);

module.exports = Launch
