

const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('welcome to home page')
})

app.get('/about',(req,res)=>{
    res.send('welcome to about page')
});

app.use((req,res)=>{
    res.status(404).send('error occured');
}).listen(4003,()=>console.log('server running port 4003'))