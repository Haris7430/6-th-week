

const express= require('express');
const fs= require('fs');
const app= express();

app.get('/',((req,res)=>{
    fs.readFile('readmi.txt','utf-8',(err,data)=>{
        if(err){
            console.log('error occured: ',err);
        } else{
            res.send(data)
        }
    } )
})).listen(4002,()=>console.log('server running port 4002'))