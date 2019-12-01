var mongoose = require("mongoose"),
    Vacations = require("./models/vacations")

var data = [
    {
        year: 2015,
        country: "United States",
        state: "Florida",
        reason: "Disney World Marathon",
        travelers: ["Dennis", "Erin"]
    }
    ];
    
function seedDB() {
   console.log(data);
}

module.exports = seedDB;