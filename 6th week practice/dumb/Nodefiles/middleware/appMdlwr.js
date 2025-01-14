
// application level middleware

const express= require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('passed through middleware');
    next();
});

app.get('/',(req,res)=>{
    res.send('hello all')
}).listen(2002)


