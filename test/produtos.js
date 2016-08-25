var http = require('http');
var assert =require('assert');
describe("#ProdutosController",function(done){
  it("#listagem JSON",function(){
    var configuracoes = {
        hostname: 'localhost',
        port: 3001,
        path: '/produtos',
        headers: {
            'Accept': 'application/json'
        }
    };
    http.get(configuracoes, function(res){
      assert.equal(res.statusCode);
      assert.equal(res.headers['content-type'] == 'application/json;  charset=utf-8');
      done();
    });
  });
});
