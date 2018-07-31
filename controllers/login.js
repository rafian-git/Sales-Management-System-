var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
var valudationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator');

router.get('/', function(req, res){
	res.render('login/index',{errs: []});

});

router.get('/logout', function(req, res){
	res.render('login/index');

});

router.post('/', function(req, res){
	var rules = valudationRules.login;

	var un = req.body.username;
	var ps = req.body.password;

var data = {
	username : un,
	password : ps
}

	var validator = new asyncValidator(rules);
	validator.validate(data, function(errors, fields){
		if(!errors)
		{

				userModel.validateUser(un, ps, function(valid){
					if(valid)
					{
						req.session.username = valid;
						res.redirect('/home');
					}
					else
					{
						res.send('Invalid username or password');
					}
				});
		}
		else
		{
			res.render('login/index',{errs: errors});
		}
	});




});

module.exports = router;
