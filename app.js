var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    Vacation = require("./models/vacations"),
    seedDB = require("./seeds");


//mongoose.connect('mongodb://localhost:27017/gookinTravel', { useNewUrlParser: true });  //, useUnifiedTopology: true
//mongoose.connect('mongodb+srv://degookin:J%40cobe11@cluster0-jv74j.mongodb.net/gookinTravel?retryWrites=true&w=majority', { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
seedDB();


//ROOT ROUTE
app.get("/", function(req, res){
    res.render("landing");
});

//YEAR ROUTES
//2015
app.get("/views/years/2015", function(req, res){
    res.render("years/2015");
});
//2016
app.get("/views/years/2016", function(req, res){
    res.render("years/2016");
});
//2017
app.get("/views/years/2017", function(req, res){
    res.render("years/2017");
});
//2018
app.get("/views/years/2018", function(req, res){
    res.render("years/2018");
});
   //2019
app.get("/views/years/2019", function(req, res){
    res.render("years/2019");
});


//FAMILY ROUTES
//dennis
app.get("/views/family/dennis", function(req, res){
    var vacations = [
        {name: "Cali", year: 2019},
        {name: "Disney", year: 2020}
    ]
    res.render("family/dennis", {vacations:vacations});
});
// app.get("/views/family/dennis", function(req, res){
//     res.render("family/dennis");
// });

//erin
app.get("/views/family/erin", function(req, res){
    res.render("family/erin");
});
//jacob
app.get("/views/family/jacob", function(req, res){
    res.render("family/jacob");
});
//owen
app.get("/views/family/owen", function(req, res){
    res.render("family/owen");
});





app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("TRAVEL SERVER HAS STARTED!")
})