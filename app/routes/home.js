module.exports = function(app){
  app.get('/', function(){
    var conn = app.infra.dbConnection();
    var prodDB = new app.infra.productsDB(conn);
    prodDB.list((err, resp) => {
      resp.render('/home/index',{livros:result})
    });
    conn.end();
  });
}
