/**
 * oracle connecting
 */
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

oracledb.getConnection(
  {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Connection was successful!');

    connection.release(
      function(err)
      {
        if (err) {
          console.error(err.message);
          return;
        }
      });
  });
