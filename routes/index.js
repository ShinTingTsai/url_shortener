const express = require('express');
const router = express.Router();
const Url = require('../models/url');



router.get('/', (req, res) => {
  res.render('index')
})


router.post('/create', async(req, res) => {
  let url = new Url()
  url.longUrl = req.body.longUrl;
  console.log("#1 url: ", url);

  const promises = []
  promises.push(
    Url.find({ longUrl: url.longUrl })
      .lean()
      .then((items) => {
        console.log("#2 items: ", items);
        if (items.length === 0) {
          //如果網址不存在，則產生新的短網址 
          let radomCode = getRandomCode(5);
          Url.find()
            .then((items) => {
              const urlsArray = [];
              items.forEach((item) => urlsArray.push(item.shortUrl));
              console.log("#3 urlArr:", urlsArray);
              while (urlsArray.includes(radomCode)) {
                radomCode = getRandomCode(radomCode.length);
                console.log("#4 while: ", radomCode);
              }
              return url.shortUrl = radomCode;
            })
            .then(() => {
              console.log("#5 create url: ", url);
              Url.create(url);
              res.render("index", {
                longUrl: url.longUrl,
                shortUrl: url.shortUrl,
              });
            })
            .catch((error) => console.error(error));
        } else {
          //如果網址已經存在，則直接讀取短網址，不另外產生
          url.shortUrl = items[0].shortUrl;
          res.render("index", {
            longUrl: url.longUrl,
            shortUrl: url.shortUrl,
          });
        } 
      })
  );

  // Promise.all(promises).then(() =>{
  //   res.render("index", {
  //     longUrl: url.longUrl,
  //     shortUrl: url.shortUrl
  //   });
  // })

  //check input date: repeat, null, format
  //initial a url data

  // const url = new Url()
  // url.longUrl = req.body.longUrl;
  // console.log("#1 url: ", url);

  //cteate shorturl


  //check shorturl repeat


  // res.render("index", { msg: url });
});


module.exports = router;


function getRandomCode(digits) {
  console.log("randomCode 1");
  let text = ''
  const character =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < digits; i++) {
    text += character.charAt(Math.floor(Math.random() * character.length))
  }
  return text
}