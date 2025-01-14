// Write a Node.js script using the fs module to read the contents of
//  a file named input.txt, convert all text to uppercase,
//  and then write the result to a new file named output.txt.


const fs=require('fs');

fs.readFile('readmi.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error occured: ',err);
        
    }
    const uppercase=data.toUpperCase();
    
    fs.writeFile('outputRead.txt',uppercase,(err)=>{
        if(err){
            console.log('error catched: ',err);
            
        }
        console.log('data writed successfuly');
    })
}) 