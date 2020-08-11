const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date,
    default: Date.now
  },
  count: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('Url', urlSchema)
