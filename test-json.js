var http = require('http');
var configs = {
  hostname: "localhost",
  port: 3001,
  path: "/produtos",
  headers: {
    'Accept': 'application/json'
  }
}

http.get(configs, function(res){
  res.on('data',function(body){
    console.log(body);
  });
});
