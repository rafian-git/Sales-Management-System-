// DECLARATION
var express = require('express');
var app = express();
var port = 3001;
 var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var login = require('./controllers/login');
var register = require('./controllers/register');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var category = require('./controllers/category');
var product = require('./controllers/product');
var sale = require('./controllers/sale');

// CONFIGURE
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views/public')));

// MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'my top secret pass', resave: false, saveUninitialized: true}));

app.use('*', function(req, res, next){

	// i was using the wrong property
	// is will be req.originalUrl, not req.path
    var pattern = new RegExp("register");
    if(pattern.test(req.originalUrl))
    {
        next();
    }
	else if(req.originalUrl == '/login' || req.originalUrl == '/logout' || req.originalUrl == '/register' )
	{
		next();
	}
	else
	{
		if(!req.session.username)
		{
			res.redirect('/login');
			return;
		}
		next();
	}
});




// ROUTES
app.use('/login', login);
app.use('/register', register);
app.use('/logout', logout);
app.use('/home', home);
app.use('/categories', category);
app.use('/products', product);
app.use('/sales', sale);

app.get('/sess', function(req, res){

	//req.session.email = 'abc@example.com';
	res.send('Done');

});



// SERVER START
app.listen(port, function(){
	console.log('Server started ...');
});
