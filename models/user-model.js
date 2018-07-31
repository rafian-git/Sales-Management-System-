var db = require('./db');
module.exports = {
	validateUser: function(username, password, callback){
		var sql = "SELECT * FROM users WHERE username=? AND password=?";
		var sqlParam = [username, password];
		db.executeQuery(sql, sqlParam, function(result){
			if(result.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(result);
			}
		});
	},

	allInfo: function(id ,callback){
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=?  ";
		db.executeQuery(sql, [id], function(result){
			callback(result);
		});
	},

	searchInfo: function(id ,searchBy,pName,callback){
		if(searchBy == "pName"){
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=? AND  product.productName LIKE ? ";
	}
	else if (searchBy == "cName") {
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=? AND  sales_table.customerName LIKE ? ";
	}
	else if (searchBy == "sId") {
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=? AND  sales_table.saleId LIKE ? ";
	}
	else if (searchBy == "pId") {
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=? AND  sales_table.productId LIKE ? ";
	}
	else if (searchBy == "cId") {
		var sql = "SELECT * FROM sales_table"
		+" INNER JOIN product ON sales_table.productId = product.productId WHERE sales_table.user_id=? AND  sales_table.categoryId LIKE ? ";
	}
		db.executeQuery(sql, [id,'%' + pName + '%'], function(result){
			callback(result);
		});
	},

	registerUser : function(regUser, callback){
		var sql = "INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?)";
		db.executeQuery(sql, [regUser.id,regUser.fullName,regUser.regDate,regUser.email,regUser.username,regUser.password,regUser.mobile,regUser.shopName,regUser.address,regUser.desc], function(result){
			if(result.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}
		});
	},

	checkUser: function(callbackFromController) {

  var sql = "SELECT * FROM users";

  db.executeQuery(sql,null, function(result_user) {
    callbackFromController(result_user);
  });
}
};
