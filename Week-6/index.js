//CRUD Create Read Update Delete
const path = require('path');
const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}\\home.html`)

})
app.get('/api/users', (req, res)=>{
    api ={
        message:'fetch all users', fname:'preet'
    }
    //automatically stringify the obj
    res.send(api);
   
});
app.listen(HTTP_PORT, ()=>{
    console.log(`listining at http://localhost:${HTTP_PORT}`);
})