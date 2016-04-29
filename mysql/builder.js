
/**
 * mysql builder
 */
var mysql      = require('mysql');
var dbConfig      = require('./dbconfig');
var _=require('lodash');

var connection = mysql.createConnection(dbConfig);

connection.connect(function(err,res){
	if(err){
		console.error('connect to db is err:'+err);
	}
});

connection.query("SELECT COLUMN_NAME,DATA_TYPE FROM information_schema.COLUMNS t WHERE t.TABLE_NAME='"+dbConfig.tableName+"'", function(err, rows, fields) {
  if (err) throw err;
  // console.log('The fields is: ', fields);
  // console.log('The solution is: ', rows);
  console.log(_.map(rows,'COLUMN_NAME'));
});

connection.end();