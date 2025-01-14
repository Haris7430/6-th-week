

const fs= require('fs');

fs.rename('renameFile.txt','rename.txt',(err)=>{
    if(err){
        console.log('error occured',err);
    } else{
        console.log('file renamed successfully.',);
    }
})  