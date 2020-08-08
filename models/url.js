const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  longURL: {
    type: String,
    required: true
  },
  shortURL: {
    type: String,
    required: true
  },
  createdTime: {
    type: Date
  },
  clicks: {
    type: Number
  }
})
module.exports = mongoose.model('URL', urlSchema);
