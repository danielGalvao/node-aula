module.exports = function(app){
  app.get('/promocoes/form', function(req,res){
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      res.render('promocoes/form',{lista:resp})
    });
    conn.end();
  });
  app.post("/promocoes",function(req,res){
    var promocao = req.body;
    app.get('io').emit('novaPromocao',promocao);
    res.redirect('promocoes/form');
  });
}
