/**
 *数据库连接
 */

module.exports = {
    user: process.env.NODE_ORACLEDB_USER || "test",

    // Instead of hard coding the password, consider prompting for it,
    // passing it in an environment variable via process.env, or using
    // External Authentication.
    password: process.env.NODE_ORACLEDB_PASSWORD || "test",

    // For information on connection strings see:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",

    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
    //表名，需要自动构建表单的表名
    tableName: 'CITY'
};
