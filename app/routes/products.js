
module.exports = (app) => {

  var productList = (req,res) => {
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      res.format({
        html: function(){
            res.render("product/list",{lista:resp});
        },
        json: function(){
            res.json(resp);
        }
      });
    });
    conn.end();
  }
  // Lista
  app.get("/produtos", productList);

  // Cadastro
  app.get("/produtos/new", (req,res) => {
    res.render("product/form",{errorsValidate:{},product:{}});
  });

  // Salva livro
  app.post("/produtos", (req,res) => {
    var product = req.body;
    var checkTitle = req.assert('titulo', "Titulo e obrigatorio").notEmpty();
    var checkPrice = req.assert('preco', "Formato invalido").isFloat();
    var errors = req.validationErrors();
    if(errors){
      res.render("product/form",{errorsValidate:errors});
      return;
    }

    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);

    prodDB.save(product,(err,resp) => {
      res.redirect("/produtos");
    });
  });
}
