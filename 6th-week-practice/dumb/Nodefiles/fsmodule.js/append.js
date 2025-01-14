
const { log } = require('console');
const fs=require('fs');

fs.appendFile('append.txt','address: kozhikkod,2nd street, manoharan villa', (err)=>{
    if(err){
        console.log('error occured',err);
    } else {
        console.log('data appended successfully.');
    }
})    