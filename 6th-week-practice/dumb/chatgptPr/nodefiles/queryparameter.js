


const express= require('express');
const app= express();

app.get('/value/:name/:age',(req,res)=>{
    const name = req.params.name;
    const age= req.params.age;

    res.send(`name: ${name}, age: ${age}`)
}).listen(3004,()=>console.log('server running port is 3004'))