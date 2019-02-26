
var createError = require('http-errors');
var cheerio     = require('cheerio');
var interceptor = require('express-interceptor');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var layouts = require('handlebars-layouts');
var AppUtils = require('./utils/Utils');

var conf = require("config");

const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
//app.use(express.static(__dirname + 'views'));
app.use(express.static('public'));


app.get("/api/getUsername", (req, res) => {
  console.log("mongo db : " + AppUtils.getMongoDb());
  AppUtils.getMongoDb().then( db => {
    var dbo = db.db("referyes");
    dbo.collection("user_profiles").find({}).toArray( (err, result) => {
      if (err) throw err;
      console.log(result.name);
      db.close();
      res.send(result);
    });
  });
  //res.send({ username: os.userInfo().username })
});

app.get('/home', (req, res) => {
  console.log('DIRNAME ' + __dirname );
   res.render('home');
});

// view engine setup
var hbs = exphbs.create({
  defaultLayout: "layout",
  extname: ".hbs",
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
});
layouts.register(hbs.handlebars, {});
app.engine(".hbs", hbs.engine);
app.set('view engine', '.hbs');


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '/views')));




app.listen(conf.get("port") || 8080, () =>
  console.log(`Listening on port ${conf.get("port") || 8080}!`)
);
