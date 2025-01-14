

const fs= require('fs');

fs.writeFile('writeFile.txt','Hi guys is here haris.', (err)=>{
    if(err){
        console.log(err);
        
    } else{
        console.log('write file successfully.');
        
    }
})