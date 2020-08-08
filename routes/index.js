const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
})


router.get("/shorten", (req, res) => {
  // res.render("index", { message: });
  console.log('req.query', req.query)
  const longURL = req.query.longURL
  res.render("index", { msg: longURL});
});



module.exports = router;
