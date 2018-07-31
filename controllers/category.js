var express = require('express');
var router = express.Router();
var categoryModel = require.main.require('./models/category-model');
var valudationRules = require.main.require('./validation_rules/rules');
var shortid = require('shortid');
var asyncValidator = require('async-validator');


router.get('/', function(req, res){
	var userId = req.session.username[0].id;
	categoryModel.getAll(userId,function(result){
		req.session.catList = result;

		res.render('category/list', {catList: req.session.catList ,user: req.session.username,errs: []});
	});
});

// router.get('/create', function(req, res){
// 	res.render('category/create', {errs: []});
// });

router.post('/', function(req, res){

	var rules = valudationRules.category.create;
	var data = {
		id :  shortid.generate(),
		userId : req.session.username[0].id,
		name: req.body.catName,
		desc: req.body.catDesc
	};

	var validator = new asyncValidator(rules);

	validator.validate(data, function(errors, fields){
		if(!errors)
		{
			categoryModel.insert(data, function(obj){
				res.redirect('/categories');
			});
		}
		else
		{
			res.render('category/list', {catList: req.session.catList ,user: req.session.username,errs: errors});
		}
	});


});

router.get('/edit/:id', function(req, res){
	var id = req.params.id;
	categoryModel.get(id, function(cat){
		res.render('category/edit', {category: cat, errs: []});
	});
});

router.post('/edit/:id', function(req, res){

	var cat = {
		id: req.body.catid,
		name: req.body.catname,
		desc: req.body.desc
	};

	var rules = valudationRules.category.edit;

	var validator = new asyncValidator(rules);

	validator.validate(cat, function(errors, fields){
		if(!errors)
		{
			categoryModel.update(cat, function(obj){
				res.redirect('/categories');
			});
		}
		else
		{
			res.render('category/edit', {category: cat, errs: errors});
		}
	});

});


router.get('/delete/:id', function(req, res){
	var id = req.params.id;
		categoryModel.get(id, function(cat){
		res.render('category/delete', {category: cat, errs: []});
 });
});


router.post('/delete/:id', function(req, res){
	var id = req.params.id;
categoryModel.delete(id, function(result){
		res.redirect('/categories');
	console.log("deleted category id #"+id);
	});
});

module.exports = router;
