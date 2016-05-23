function ProductsDB(conn){
  this.conn = conn;
}
ProductsDB.prototype.list = function(callback){
  this.conn.query("SELECT * FROM livros",callback);
}

module.exports = function(){
  return ProductsDB;
}
