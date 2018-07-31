var db = require('./db');
module.exports = {
	getAll: function(userId,callback){
		var sql = "SELECT product.productId,category.categoryId,category.categoryName,product.productName,product.quantity,product.details,product.price FROM product"
		+" INNER JOIN category ON product.categoryId = category.categoryId  where product.user_id=? ";
		db.executeQuery(sql,[userId], function(result){
			callback(result);
		});
	},
	getCat: function(userId,callback){
		var sql = "SELECT * FROM category WHERE user_id=?";
		db.executeQuery(sql,[userId], function(result){
			callback(result);
		});
	},
	getSale: function(id, callback){
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.saleId=?";
		db.executeQuery(sql, [id], function(result){
			callback(result);
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM product WHERE productId =?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},
	insert: function(data, callback){
		var sql = "INSERT INTO sales_table VALUES (?,?,?,?,?,?,?,?,?,?)";
		db.executeQuery(sql, [null,data.id,data.userId,data.prod,data.cat,data.price,data.cname,data.date,data.month,data.year], function(result){
			callback(result);
		});
	},
	update: function(product, callback){
		var sql = "UPDATE product SET productName=?, quantity=?,details=?,price=? WHERE productId=?";
		db.executeQuery(sql, [product.name, product.quantity,product.details,product.price, product.id], function(result){
			callback(result);
		});
	}
};
