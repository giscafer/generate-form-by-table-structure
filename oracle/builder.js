/**
 * @author giscafer
 * oracle builder
 */
var async = require('async');
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');
//
var mainForm=require('../angular/mainForm');
var popForm=require('../angular/popForm');

var doconnect = function(cb) {
  oracledb.getConnection(
    {
      user          : dbConfig.user,
      password      : dbConfig.password,
      connectString : dbConfig.connectString
    },
    cb);
};

var dorelease = function(conn) {
  conn.release(function (err) {
    if (err)
      console.error(err.message);
  });
};

// 获取表的字段类型和字段名称
var doquery_columns = function (conn, cb) {
  conn.execute(
    "SELECT COLUMN_NAME,DATA_TYPE FROM user_tab_columns t WHERE t.TABLE_NAME='"+dbConfig.tableName+"'", {},{ outFormat: oracledb.OBJECT },
    function(err, result)
    {
      if (err) {
        return cb(err, conn);
      } else {
        console.log("-----"+dbConfig.tableName+"--------");
        mainForm.builder(result.rows);
        popForm.builder(result.rows);
        // console.log(result.rows);
        return cb(null, conn);
      }
    });
};
async.waterfall(
  [
    doconnect,
    doquery_columns
  ],
  function (err, conn) {
    if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
    if (conn)
      dorelease(conn);
  });