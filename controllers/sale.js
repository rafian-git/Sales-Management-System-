var express = require('express');
var router = express.Router();
var productModel = require.main.require('./models/product-model');
var saleModel = require.main.require('./models/sale-model');
var valudationRules = require.main.require('./validation_rules/rules');
var shortid = require('shortid');
var asyncValidator = require('async-validator');


router.get('/', function(req, res){
	req.session.saleId = shortid.generate();
var userId = req.session.username[0].id;
	productModel.getAll(userId,function(result){
		productModel.getCat(userId,function(cat){
			saleModel.getSale(req.session.saleId,function(sale){
			req.session.prodList = result;
		req.session.catList = cat;
		req.session.saleList = sale; 
		res.render('sale/addNewSales', {saleList : req.session.saleList,catList : req.session.catList,prodList: req.session.prodList ,user: req.session.username,errs: []});
			});
		});
	});
});



router.post('/addRow/:cname/:cat/:prod/:quantity/:price', function(req, res){
	var dt = new Date();
	var sales = {
		id : req.session.saleId,
		userId : req.session.username[0].id,
    cname : req.params.cname,
    cat : req.params.cat,
		prod : req.params.prod,
    quantity : req.params.quantity,
    price : req.params.price,
		date : dt.getDate(),
		month : dt.getMonth(),
		year : dt.getFullYear()
  };
		saleModel.insert(sales,function(result){
			console.log("sale inserted");
			});
});
//
//
//
// router.post('/', function(req, res){
//
// 	var rules = valudationRules.category.create;
// 	var data = {
// 		id :  shortid.generate(),
// 		userId : req.session.username[0].id,
// 		catId:req.body.cat,
// 		name: req.body.pn,
// 		price: req.body.price,
// 		details: req.body.details,
// 		quantity: req.body.quantity
// 	};
//
// 	productModel.insert(data, function(obj){
//  			res.redirect('/products');
//  		});
//
// 	// var validator = new asyncValidator(rules);
// 	//
// 	// validator.validate(data, function(errors, fields){
// 	// 	if(!errors)
// 	// 	{
// 	// 		productModel.insert(data, function(obj){
// 	// 			res.redirect('/products');
// 	// 		});
// 	// 	}
// 	// 	else
// 	// 	{
// 	// 		res.render('products/list', {catList : req.session.catList,prodList: req.session.prodList ,user: req.session.username,errs: errors});
// 	// 	}
// 	// });
//
//
// });
//
//
// router.get('/edit/:id', function(req, res){
// 	var id = req.params.id;
// 	productModel.get(id, function(prod){
// 		res.render('product/edit', {product: prod,catList : req.session.catList, errs: []});
// 	});
// });
//
//
// router.post('/edit/:id', function(req, res){
//
// 	var cat = {
// 		id :  req.params.id,
// 		userId : req.session.username[0].id,
// 		catId:req.body.cat,
// 		name: req.body.pn,
// 		price: req.body.price,
// 		details: req.body.details,
// 		quantity: req.body.quantity
// 	};
//
// 	productModel.update(cat, function(obj){
// 		res.redirect('/products');
// });
// 	// var rules = valudationRules.category.edit;
// 	//
// 	// var validator = new asyncValidator(rules);
// 	//
// 	// validator.validate(cat, function(errors, fields){
// 	// 	if(!errors)
// 	// 	{
// 	// 		categoryModel.update(cat, function(obj){
// 	// 			res.redirect('/categories');
// 	// 		});
// 	// 	}
// 	// 	else
// 	// 	{
// 	// 		res.render('category/edit', {category: cat, errs: errors});
// 	// 	}
// 	// });
//
// });
//
//
// router.get('/delete/:id', function(req, res){
// 	var id = req.params.id;
// 		productModel.get(id, function(prod){
// 		res.render('product/delete', {product: prod,catList : req.session.catList, errs: []});
//  });
// });
//
//
// router.post('/delete/:id', function(req, res){
// 	var id = req.params.id;
// productModel.delete(id, function(result){
// 		res.redirect('/products');
// 	console.log("deleted product id #"+id);
// 	});
// });

module.exports = router;
