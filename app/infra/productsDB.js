module.exports = function(){
  this.list = function(conn, callback){
    conn.query("SELECT * FROM livros",callback);
  }
  return this;
}
