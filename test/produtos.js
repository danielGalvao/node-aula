var express = require('../config/express')();
var request = require('supertest')(express);
describe("#ProdutosController",function(done){
  it("#listagem JSON",function(){
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type',/json/)
      .expect(22,done)
  });
});
