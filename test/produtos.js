var http = require('http');
describe("#ProdutosController",function(funcaoFinalizacao){
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
      if(res.statusCode == 200){
        console.log('Status OK');
      }
      if(res.headers['content-type'] == 'application/json;charset=utf-8'){
        console.log('content-type OK');
      }
      funcaoFinalizacao();
    });
  });
});
