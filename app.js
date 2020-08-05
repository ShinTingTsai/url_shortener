// use express
const express = require("express");
const mongoose = require('mongoose') // 載入 mongoose

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/url_shortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // 設定連線到 mongoDB

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})



//setup router
app.get('/', (req, res) => {
  res.send("hello world");
})
// app.listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})