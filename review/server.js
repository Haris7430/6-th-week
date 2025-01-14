
const express= require('express');
const app=express();


app.get('/user/:name',(req,res)=>{
    const name= req.params.name;

    res.send(`${name}`)
}).listen(5000,()=>console.log('server running port 5000'))