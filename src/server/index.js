
var createError = require('http-errors');
var cheerio     = require('cheerio');
var interceptor = require('express-interceptor');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var layouts = require('handlebars-layouts');
var AppUtils = require('./utils/DBUtils')
var usersRouter = require('./routes/user');

var conf = require("config");

const express = require("express");
const os = require("os");

const app = express();

app.use(express.static("dist"));
//app.use(express.static(__dirname + 'views'));
app.use(express.static('public'));


app.get("/api/getUsername", async (req, res) => {
  
  //console.log("mongo db : " + AppUtils.getMongoDb());
 var db = await AppUtils.getMongoDb();
 var dbo = await db.db("referyes");
 var collection = await dbo.collection("user_profiles").find({});
 var result = await collection.toArray();
 db.close();
 var rows =  await AppUtils.authenticate('Pragya.Sharma2201@gmail.com', '225.5265.5328325.5340.5353348363328215.5220.5');
 res.send(rows);
});

app.get('/home', (req, res) => {
   res.render('home');
});

app.get('/view/*', (req, res) => {
  res.render('home');
})
app.get('/', (req, res) => {
  res.render('home');
})

// view engine setup
var hbs = exphbs.create({
  defaultLayout: "layout",
  extname: ".html",
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
});
layouts.register(hbs.handlebars, {});
app.engine(".html", hbs.engine);
app.set('view engine', '.html');


//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//App Routes
app.use('/user', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`back-end server dirname  ${__dirname}`)


app.listen(conf.get("port") || 8080, () =>
  console.log(`Listening on port and dirName ${__dirname} ${conf.get("port") || 8080}!`)
);
