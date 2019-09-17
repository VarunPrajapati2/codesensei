var express = require('express');
var exphbs = require('express-handlebars');
var path =require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var connectFlash = require('connect-flash');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongodb');
const MongoClient = require("mongodb").MongoClient;
var mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const request = require('request');


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

MongoClient.connect("mongodb://localhost:27017/code-sensai", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
var db= mongoose.connection;


//var routes= require('./routes/index');
//var routes= require('./routes/users');





const app=express();




//View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

//static file connection
app.use(express.static(path.join(__dirname, 'public')));

//Express Session
app.use(expressSession({
	secret: 'secret',
	saveUninitialized: true,
	resave:true
}));


//Passport Init
app.use(passport.initialize());
app.use(passport.session());


//Express validator
app.use(expressValidator({
	errorFormatter: function (param, msg, value) {
		var namespace = param.split('.')
			, root = namespace.shift()
			, formParam = root;
		while(namespace.length){
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
}));


//Connect flash
app.use(connectFlash());

//Global vars
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	
	next();
});


//app.use('/',routes);
//app.use('/users',users);

//all pages routing 

app.get('/',(request,response)=>{
    response.render('index',{Title:'Code Sensei'});
});

app.get('/about-us',(request,response)=>{
    response.render('about-us',{Title:'Code Sensei'});
});

app.get('/contact-us',(request,response)=>{
    response.render('contact-us',{Title:'Code Sensei'});
});

app.get('/courses',(request,response)=>{
    response.render('courses',{Title:'Code Sensei'});
});

app.get('/events',(request,response)=>{
    response.render('events',{Title:'events'});
});

app.get('/event-detail',(request,response)=>{
    response.render('event-detail',{Title:'event-detail'});
});
//login
app.get('/login',(request,response)=>{
    response.render('login',{Title:'CodeSensei | login'});
});


// register
app.get('/register',(request,response)=>{
    response.render('register',{Title:'CodeSensei | signup'});
});

app.get('/best-meanstack-training-institute-in-noida',(request,response)=>{
    response.render('best-meanstack-training-institute-in-noida',{Title:'best-meanstack-training-institute-in-noida'});
});


app.get('/best-angularjs-training-institute-in-noida',(request,response)=>{
    response.render('best-angularjs-training-institute-in-noida',{Title:'best-angularjs-training-institute-in-noida'});
});

app.get('/best-web-designing-training-institute-in-noida',(request,response)=>{
    response.render('best-web-designing-training-institute-in-noida',{Title:'best-web-designing-training-institute-in-noida'});
});

app.get('/best-expressjs-training-institute-in-noida',(request,response)=>{
    response.render('best-expressjs-training-institute-in-noida',{Title:'best-expressjs-training-institute-in-noida'});
});

app.get('/best-mongodb-training-institute-in-noida',(request,response)=>{
    response.render('best-mongodb-training-institute-in-noida',{Title:'best-mongodb-training-institute-in-noida'});
});

// register
app.get('/best-nodejs-training-institute-in-noida',(request,response)=>{
    response.render('best-nodejs-training-institute-in-noida',{Title:'best-nodejs-training-institute-in-noida'});
});




//local serve port 9999
app.listen('8888',()=>{
    console.log('server is running on port 8888');
});