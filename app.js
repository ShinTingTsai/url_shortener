// use express
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser")
const routes = require("./routes");
const router = require("./routes");
require("./config/mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)





app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`);
});
