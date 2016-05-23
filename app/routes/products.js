
module.exports = (app) => {
  app.get("/produtos", (req,res) => {

    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);

    prodDB.list(function(err, resp){
      res.render("product/list",{lista:resp});
    });

    conn.end();
  });
}
