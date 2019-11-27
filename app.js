var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    seedDB = require("./seeds");
    
mongoose.connect('mongodb://localhost:27017/gookinTravel', { useNewUrlParser: true });
app.set("view engine", "ejs");
seedDB();
    
    
    
    
    
    app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Travel Server Has Started...");
});