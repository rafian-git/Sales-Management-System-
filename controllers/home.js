var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


router.get('/', function(req, res){
	if(!req.session.username)
	{
		res.redirect('/login');
		return;
	}
	userModel.allInfo(req.session.username[0].id,function(result){
req.session.allInfo= result;
	res.render('home/index', {user: req.session.username,allInfo :req.session.allInfo});

});
});

router.post('/',function(req, res){
	var pname = req.body.search; 
	userModel.searchInfo(req.session.username[0].id,req.body.drop,pname,function(searchResult){
req.session.searchInfo= searchResult;
	res.render('home/search', {user: req.session.username,searchInfo :req.session.searchInfo});
  });
});



module.exports = router;
