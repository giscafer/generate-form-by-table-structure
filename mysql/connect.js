/**
 * 测试mysql数据库连接
 * @type {[type]}
 */
var mysql      = require('mysql');
var dbconfig      = require('./dbconfig');
var connection = mysql.createConnection(dbconfig);

connection.connect(function(err,res){
	if(err){
		console.error('connect to db is err:'+err);
	}
});
connection.end();