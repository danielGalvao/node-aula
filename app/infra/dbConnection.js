var appMysql = require("mysql");
var connectDB = function(){
  return appMysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'livraria'
  });
}
module.exports = function(){
  return connectDB;
}
