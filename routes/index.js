const express = require('express');
const router = express.Router();
const URL = require('../models/url')

router.get('/', (req, res) => {
  res.render('index')
})


router.post('/create', (req, res) => {
  // console.log('req.query', req.query);
  //check input date: repeat, null, format
  //initial a url data
  const url = req.body;
  url.shortURL = 'testShortURL'
  url.createdTime = new Date()
  url.clicks = 0
  console.log("url", url);

  //cteate shorturl
  return URL.create(url)
    .then(() => res.render('index', { longURL: url.longURL, shortURL: url.shortURL}))
    .catch((error) => console.error(error));
  //check shorturl repeat
  // write into DB

  // show on browser 
  // return URL.create(longURL)
  // res.render("index", { msg: url });
});


module.exports = router;
