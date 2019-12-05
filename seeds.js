var mongoose = require("mongoose"),
    Vacation = require("./models/vacations");

//seed data
var vacayData = [
    {
        year: 2015,
        country: "United States",
        state: "Florida",
        reason: "Disney World Marathon",
        travelers: ["Dennis", "Erin"]
    }
    ];
    
    
// function seedDB(){
//     //Remove all vacations
//    Vacation.deleteMany({}, function(err){
//         if(err){
//             console.log(err);
//         }
//         console.log("removed all vacations!");
//              //add a few vacations
//             vacayData.forEach(function(seed){
//                 Vacation.create(seed, function(err, vacay){
//                     if(err){
//                         console.log(err);
//                     } else {
//                         console.log("added a vacation");
//                         vacay.save();
//                     }        
//             });
//         });
//     }); 
// }

function seedDB(){
    vacayData.forEach(function(seed){
        Vacation.create(seed, function(err, vacay){
            if(err){
                console.log(err);
            } else {
                console.log("added a vacation");
                vacay.save();
            }
        })
    })
}

module.exports = seedDB;