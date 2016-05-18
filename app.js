var app = require("./config/express")();
var appRoutes = require("./app/routes/products")(app);

app.listen(3001,()=>{
  console.log("Servidor rodando");
});
