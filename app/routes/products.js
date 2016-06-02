
module.exports = (app) => {

  var productList = (req,res) => {
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      res.render("product/list",{lista:resp});
    });
    conn.end();
  }
  // Lista
  app.get("/produtos", productList);

  // Cadastro
  app.get("/produtos/new", (req,res) => {
    res.render("product/form");
  });

  // Salva livro
  app.post("/produtos", (req,res) => {
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    var product = req.body;
    prodDB.save(product,(err,resp) => {
      res.redirect("/produtos");
    });
  });
}
