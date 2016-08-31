module.exports = function(app){
  app.get('/promocoes/form', function(){
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      resp.render('/promocoes/form',{livros:result})
    });
    conn.end();
  });
  app.post("/promocoes",function(req,res){
    var promocao = req.body;
    console.log(promocao);
    res.redirect('/promocoes/form');
  });
}
