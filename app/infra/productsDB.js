function ProductsDB(conn){
  this.conn = conn;
}
ProductsDB.prototype.list = function(callback){
  this.conn.query("SELECT * FROM livros",callback);
}

ProductsDB.prototype.save = function(product,callback){
    this.conn.query("INSERT INTO livros set ?",product,callback);
}

module.exports = function(){
  return ProductsDB;
}
