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
app.get("/views/years/2015/index", function(req, res){
    res.render("years/2015/index");
});
//2016
app.get("/views/years/2016/index", function(req, res){
    res.render("years/2016/index");
});
//2017
app.get("/views/years/2017/index", function(req, res){
    res.render("years/2017/index");
});
//2018
app.get("/views/years/2018/index", function(req, res){
    res.render("years/2018/index");
});
   //2019
app.get("/views/years/2019/index", function(req, res){
    res.render("years/2019/index");
});
  //2020
app.get("/views/years/2020/index", function(req, res){
    res.render("years/2020/index");
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
//parker
app.get("/views/family/parker"), function(req, res){
    res.render("family/parker");

//CREATE - add a new vacation
app.post("/years/2019/index", function(req, res){
    //res.send("POST ROUTE!!!")
   var title = req.body.title;
   var desc = req.body.desc;
   var people = req.body.people;
   var newVacation = {title: title, desc: desc, people: people};
   Vacation.create(newVacation, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else {
           res.redirect("/years/2019/index")
       }
   })
});

//NEW
app.get("/views/years/2019/new", function(req, res){
    res.render("years/2019/new");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("TRAVEL SERVER HAS STARTED!")
})
