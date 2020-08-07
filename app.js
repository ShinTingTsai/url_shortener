// use express
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
require('./config/mongoose')

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));

//setup router
app.get("/", (req, res) => {
  // res.send("hello world");
  res.render("index");
});
// app.listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
