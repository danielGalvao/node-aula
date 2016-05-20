var appMysql = require("mysql");
module.exports = function(){
  return appMysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'livraria'
  });
}
