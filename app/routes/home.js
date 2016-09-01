module.exports = function(app){
  app.get('/', function(req,res){
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      res.render('home/index',{livros:resp})
    });
    conn.end();
  });
}
