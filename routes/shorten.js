const Url = require("../models/url");
module.exports = {
  (req, res) => {
    shortenUrl(5, urlCode => {
      Url.create({
        url.longUrl = req.body.longUrl
        url.shortUrl = urlCode
        url.createdTime = new Date()
        url.clicks = 0
      })
    })
  }
}

function shortenUrl(digits, saveToDB){
  const urlCode = randomCode(digits)
  Url.count({where: { shortUrl: urlCode}})
  .then( count => {
    if ( count === 0) {
      saveToDB(urlCode)
    }
    else {
      return shortenUrl(urlCode.length, saveToDB)
    }
  })
}

function randomCode(digits){
  let text = ''
  const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < digits; i++){
      text += character.charAt(Math.floor(Math.random() * character.length))
      return text
    }
}