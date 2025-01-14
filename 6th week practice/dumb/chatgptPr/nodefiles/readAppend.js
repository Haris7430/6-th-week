

const fs= require('fs');

fs.readFile('notes.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error occured: ',err);
    } else{
        console.log('data: ',data);
    }
});

fs.appendFile('notes.txt','Additional note',(err)=>{
    if(err){
        console.log('error occured: ',err);
    }
    console.log('data appended');
})  