var appMysql = require("mysql");
var connectDB = function(){
  if(!process.env.NODE_ENV){
    return appMysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'livraria'
    });
  }
  if(process.env.NODE_ENV == 'test'){
    return appMysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'livraria'
    });
  }
  if(process.env.NODE_ENV == 'production'){
    var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)?reconnect=true/);
    return appMysql.createConnection({
      host     : "us-cdbr-iron-east-04.cleardb.net",
      user     : "b957c6090a6263",
      password : "20d9d579",
      database : "heroku_dcefe1eba4d931e"
    });
  }
}
module.exports = function(){
  return connectDB;
}
