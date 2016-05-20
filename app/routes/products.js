var dbConnection = require("../infra/dbConnection");
module.exports = (app) => {
  app.get("/produtos", (req,res) => {
    var appMysql = require("mysql");
    var conn = dbConnection();
    conn.query("SELECT * FROM livros",function(err, resp){
      res.render("product/list",{lista:resp});
    });
    conn.end();
  });
}
