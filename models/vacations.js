var mongoose = require("mongoose");

//Schema setup
var vacationSchema = new mongoose.Schema ({
    year: Number,
    country: String,
    state: String,
    reason: String,
    travelers: Array
});

module.exports = mongoose.model("Vacation", vacationSchema);