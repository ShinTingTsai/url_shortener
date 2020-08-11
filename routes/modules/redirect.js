const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params
  console.log('shortUrl: ', shortUrl)
  // redirect to long url
  function redirectUrl (shortUrl) {
    return new Promise((resolve, reject) => {
      Url.findOne({ shortUrl: shortUrl })
        .then((item) => {
          console.log('item: ', item)
          if (item) {
            resolve(item._id)
            res.redirect(`${item.longUrl}`)
          } else {
            const msg = 'URL not exist'
            res.render('index', {
              longUrl: 'No Data',
              shortUrl: shortUrl,
              msg: msg
            })
          }
        })
        .catch((error) => console.log(error))
    })
  }
  // update click count
  function updateClickCount (id) {
    return new Promise((resolve, reject) => {
      Url.findById(id)
        .then((item) => {
          item.count += 1
          item.save()
        })
        .catch((error) => console.log(error))
    })
  }

  async function redirectUrlAsync (shortUrl) {
    try {
      const id = await redirectUrl(shortUrl)
      await updateClickCount(id)
    } catch (error) {
      console.log(error)
    }
  }
  redirectUrlAsync(shortUrl)
})

module.exports = router
