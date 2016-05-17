var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/produtos", (req,res)=>{
  res.render("produto/lista")
});

app.listen(3001,()=>{
  console.log("Servidor rodando");
});
