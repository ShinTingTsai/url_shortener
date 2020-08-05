# URL Shortener 實作練習

## 功能

首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.google.com；送出表單之後，畫面會回傳格式化後的短網址，如 https://your-project-name.herokuapp.com/6y7UP
在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 https://your-project-name.herokuapp.com/6y7UP），瀏覽器就會導向原本的網站（如 https://www.google.com）
【挑戰題】使用者可以按 Copy 來複製縮短後的網址
指定規格

使用 MongoDB & Mongoose 完成專案
短網址輸出格式為 5 碼英數組合，如下圖（這裡 ... 代表你應用程式的網址）：




## 環境建置與需求
- Node.js v10.15.0
- Express v4.17.1

## 安裝與執行步驟
- 下載專案到本機
```
git clone https://github.com/ShinTingTsai/url_shortener
```
- 切至專案資料夾
```
cd Middleware
```
- 安裝套件
```
npm install
```
- 開啟程式
```
npm run dev
```
- 請至http://localhost:3000開始使用程式


## 開發人員
Shin-Ting Tsai
