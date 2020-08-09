const express = require("express");
const router = express.Router();
const Url = require("../../models/url");

router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params;
  console.log("shortUrl: ", shortUrl);
  //redirect to long url
  function redirectUrl(shortUrl) {
    return new Promise((resolve, reject) => {
      Url.findOne({ shortUrl: shortUrl })
        .then((item) => {
          console.log("item: ", item);
          if (item) {
            res.redirect(`${item.longUrl}`)
          } else {
            const msg = 'URL not exist'
            res.render('index', { longUrl:'No Data', shortUrl: shortUrl, msg: msg})
          }
        })
    })
  }
  // update click count

  async function redirectUrlAsync(shortUrl) {
    await redirectUrl(shortUrl);
  }
  redirectUrlAsync(shortUrl);
})


module.exports = router;