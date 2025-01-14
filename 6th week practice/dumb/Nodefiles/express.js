

const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('i am here')
}).listen(2003,()=>(console.log('server runing 2003 port')
))