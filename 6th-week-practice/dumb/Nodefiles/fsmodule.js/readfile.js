

const fs= require('fs');

fs.readFile('readFile.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error reading file:',err);
        
    } else{
        console.log('file content:' , data);
        
    }
}) 