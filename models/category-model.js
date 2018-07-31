var db = require('./db');
module.exports = {
	getAll: function(userId,callback){
		var sql = "SELECT * FROM category where user_id=?";
		db.executeQuery(sql,[userId], function(result){
			callback(result);
		});
	},
	get: function(id, callback){
		var sql = "SELECT * FROM category WHERE categoryId=?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},
	delete: function(id, callback){
		var sql = "DELETE FROM category WHERE categoryId =?";
		db.executeQuery(sql, [id], function(result){
			callback(result[0]);
		});
	},
	insert: function(data, callback){
		var sql = "INSERT INTO category VALUES (?, ?, ?,?)";
		db.executeQuery(sql, [data.id,data.userId,data.name,data.desc], function(result){
			callback(result);
		});
	},
	update: function(category, callback){
		var sql = "UPDATE category SET categoryName=?, category_desc=? WHERE categoryId=?";
		db.executeQuery(sql, [category.name, category.desc, category.id], function(result){
			callback(result);
		});
	}
};
