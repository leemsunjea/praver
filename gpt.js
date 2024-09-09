const express = require('express') //express를 설치했기 때문에 가져올 수 있다.
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/' +'test.html');
  
  
})

app.get('/get-api-key', (req, res) => {
    require("dotenv").config();
    res.json({ apiKey: process.env.api_key });
  });

app.listen(5000);
console.log('localhost:5000번에 포트가 열렸습니다.');




