var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

mongoose.connect('mongodb://localhost/assets', { useUnifiedTopology: true });

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

///////////////////
//SCHEMAS....
///////////////////

//ASSET
var newAsset = mongoose.Schema({
    assetId: Number,
	name: String,
	img: String,
	desc: String,
    assetType: String,
    defaultLocation: String,
    currentLocation: String,
    lastChange: Date,
    changeDesc: String,
});

//STOCK
var newStock = mongoose.Schema({
    stockId: Number,
    location: String,
    status: String 
});

//USER
var newUser = mongoose.Schema({
	name: String,
	profilePic: String,
	profileName: String,
    DOB: Date,
    mobile: Number,
    email: String,
    suburb: String,
    address1: String,
    address2: String
});

var Asset = mongoose.model('asset', newAsset);
var Stock = mongoose.model('stock', newStock);
var User = mongoose.model('user', newUser);


///////////////////
//ROUTES
///////////////////
//HOME 
app.get("/", (req, res)=>{
    res.send('LogistiX asset tracking - server started.');
});

//INDEX => GET "/assetsIndex"
app.get('/assetsIndex', (req, res)=>{
	res.render('assets');
})



//NEW => GET "/assets/new"

//CREATE => POST "/assets"

//SHOW => GET "/assets/:id"

//EDIT => GET "/assets/:id/edit"

//UPDATE => PUT "/assets/:id"

//DELETE => DELETE "/assets/:id"

app.listen(3000, ()=>{
    console.log("LogistiX Server Started")
})








//INDEX => GET "/assets"        list of all assets and their associated stock holder

//NEW => GET "/assets/new"       form to add new asset

//CREATE => POST "/assets"      create new item and redirect to index

//SHOW => GET "/assets/:id"     shows a single asset

//EDIT => GET "/assets/:id/edit"    form to edit item

//UPDATE => PUT "/assets/:id"       updates asset and redirects

//DELETE => DELETE "/assets/:id"    deletes asset and redirects

// var url = process.env.DATABASEURL || "mongodb://localhost/assets";
// mongoose.connect(url);