module.exports = (app) => {
  app.get("/produtos", (req,res)=>{
    res.render("product/lista")
  });
}
