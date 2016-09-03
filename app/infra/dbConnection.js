var appMysql = require("mysql");
var connectDB = function(){
  var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
  var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)?reconnect=true/);
  return appMysql.createConnection({
    host     : grupos[3],
    user     : grupos[1],
    password : grupos[2],
    database : grupos[4]
  });
}
module.exports = function(){
  return connectDB;
}
