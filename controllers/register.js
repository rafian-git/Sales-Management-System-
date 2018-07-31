var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
var shortid = require('shortid');
var valudationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator');


router.get('/', function(req, res){
	res.render('register/index',{errs: []});

});

router.get('/logout', function(req, res){
	res.render('register/index');

});

router.post('/', function(req, res){

	var rules = valudationRules.register.index;

	var regUser={
		id :  shortid.generate(),
		fullName : req.body.fn,
		regDate : new Date(),
		username : req.body.un,
		shopName : req.body.sn,
		email : req.body.mail,
		password : req.body.pw,
		address : req.body.address,
		mobile : req.body.mobile,
		desc : req.body.desc
	}
	var validator = new asyncValidator(rules);
	validator.validate(regUser, function(errors, fields){
		if(!errors)
		{
			userModel.registerUser(regUser, function(valid){
				if(valid)
				{
					// req.session.username = un;
					res.redirect('/login');
				}
				else
				{
					res.send('registration unsuccessful !');
				}
			});
		}
		else
		{
			res.render('register/index',{errs: errors});
		}
	});




});


router.get('/usrnmCheck/:usrNm', function(req,res){ 
			userModel.checkUser( function(result_user) {
				console.log(result_user);
				var temp = 'Available';
				for (var i = 0; i < result_user.length; i++) {
					if (result_user[i].username == req.params.usrNm) {
						temp = "Not Available";
						break;
					}
				}
				res.send(temp);
				});
});

module.exports = router;
