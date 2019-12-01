var mongoose = require("mongoose"),
    Vacation = require("./models/vacations");

var data = [
    {
        year: 2015,
        country: "United States",
        state: "Florida",
        reason: "Disney World Marathon",
        travelers: ["Dennis", "Erin"]
    }
    ];
    
    
    function seedDB(){
   //Remove all meals
   Vacation.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all vacations!");
             //add a few vacations
            data.forEach(function(seed){
                Vacation.create(seed, function(err, vacation){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a vacation");
                        vacation.save();
                    }        
            });
        });
    }); 
}
    


module.exports = seedDB;