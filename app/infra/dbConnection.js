var appMysql = require("mysql");
var connectDB = function(){
  var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
  var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)?reconnect=true/);
  console.log(grupos);
  return appMysql.createConnection({
    host     : "us-cdbr-iron-east-04.cleardb.net",
    user     : grupos[1],
    password : grupos[2],
    database : grupos[3]
  });
}
module.exports = function(){
  return connectDB;
}
