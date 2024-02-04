const express= require('express');
const path = require('path');
const app = express();

const HTTP_PORT=process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.get('/other.html', (req, res)=>{
  res.sendFile(path.join(__dirname, '/views/other.html'));
});
app.listen(HTTP_PORT, ()=>{console.log(`server running at http://localhost:${HTTP_PORT}`)});