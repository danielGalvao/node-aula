
module.exports = (app) => {
  app.get("/produtos", (req,res) => {

    var conn = app.infra.dbConnection();
    var prodDB = app.infra.productsDB;

    prodDB.list(conn,function(err, resp){
      res.render("product/list",{lista:resp});
    });

    conn.end();
  });
}
