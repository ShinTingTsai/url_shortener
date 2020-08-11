const express = require("express")
const router = express.Router()
const Url = require("../../models/url")

router.post("/", async (req, res) => {
  let url = new Url();
  url.longUrl = req.body.longUrl;

  //check longUrl available
  function checkLongUrlExist(url) {
    return new Promise((resolve, reject) => {
      Url.findOne({ longUrl: url.longUrl })
        .then((item) => {
          if (item) resolve(item);
          else resolve(url);
        })
        .catch((error) => console.log(error));
    });
  }

  //Get short Url
  function getShortCode(url) {
    return new Promise((resolve, reject) => {
      //如果網址已經存在，則直接讀取短網址，不另外產生
      if (url.shortUrl) {
        resolve(url);
      }
      //如果網址不存在，則產生新的短網址
      else {
        url.shortUrl = getRandomCode(5);
        Url.find()
          .then((items) => {
            //[檢查點]產生不重複短網址
            const urlsArray = [];
            items.forEach((item) => urlsArray.push(item.shortUrl));
            while (urlsArray.includes(url.shortUrl)) {
              url.shortUrl = getRandomCode(url.shortUrl.length);
            }
            Url.create(url);
            resolve(url);
          })
          .catch((error) => console.log(error));
      }
    });
  }

  function showUrl(url) {
    return new Promise((resolve, reject) => {
      try {
        res.render("index", {
          longUrl: url.longUrl,
          shortUrl: url.shortUrl,
        })
      } catch (error) {
        console.log(error);
      }
    });
  }

  async function shortenUrl(url) {
    try {
      url = await checkLongUrlExist(url);
      url = await getShortCode(url);
      await showUrl(url);

      console.log("check url: ", url);
    } catch (error) {
      console.log(error);
    }

  }
  shortenUrl(url);
});

module.exports = router;

function getRandomCode(digits) {
  console.log("randomCode 1");
  let text = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < digits; i++) {
    text += character.charAt(Math.floor(Math.random() * character.length));
  }
  return text;
}