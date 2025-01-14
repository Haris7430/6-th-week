

const fs=require('fs');
const fileName='notes.txt';

fs.readFile(fileName,'utf-8',(err,data)=>{
    if(err){
        if(err.code== 'ENOENT'){
            fs.writeFile(fileName, 'This is a default note.',(err)=>{
                if(err) throw err;
                console.log('File created with default content.');
            });
        } else{
            console.log('Error occured: ', err);
        }
    } else {
        console.log('File content: ', data);
    }
}) 