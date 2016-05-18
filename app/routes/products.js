module.exports = (app) => {
  app.get("/produtos", (req,res) => {
    var appMysql = require("mysql");
    var conn = appMysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'livraria'
    });
    conn.query("SELECT * FROM livros",function(err, resp){
      res.send(resp);
    });
    conn.end();
  });
}
