var express = require('../config/express')();
var request = require('supertest')(express);
describe("#ProdutosController",function(done){
  it("#listagem JSON",function(){
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type',/json/)
      .expect(22,done)
  });

  it('#cadastro de novo produto com dados invalidos', function(done){
    request.post('/produtos')
      .send({titulo:"testasaass",preco:""})
      .expect(302,done);
  });
});
