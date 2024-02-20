const express = require('express');
const app = express();
const HTTP_PORT= process.env.PORT||8080;
// app.get('/student/:studentID', (req, res)=>{
//     var stuID = req.params.studentID;
//     res.send(stuID);
//     console.log(req);
//     console.log(res);



//     res.send('Hello, world!');
// })
// app.get('/student', (req, res)=>{
//     var stuID = req.query.stuID;
//     res.send(stuID);
// })

app.use((req,res, next)=>{  
    console.log("I am in the middle");
    next();
});

app.listen(HTTP_PORT, ()=>{console.log('listining on: '+HTTP_PORT);});