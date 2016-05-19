
/**
 * mysql builder
 */
var mysql      = require('mysql');
var dbConfig      = require('./dbconfig');
var _=require('lodash');
//angular form builder
var mainForm=require('../angular/mainForm');
var popForm=require('../angular/popForm');

var connection = mysql.createConnection(dbConfig);

connection.connect(function(err,res){
	if(err){
		console.error('connect to db is err:'+err);
	}
});

connection.query("SELECT COLUMN_NAME,DATA_TYPE FROM information_schema.COLUMNS t WHERE t.TABLE_NAME='"+dbConfig.tableName+"'", function(err, rows, fields) {
  if (err) throw err;
  var columnNames=_.map(rows,'COLUMN_NAME');
  console.log(columnNames);
  mainForm.builder(rows);
  popForm.builder(rows);
});

connection.end();