


process.on('message',(msg)=>{
    console.log(`message from parent: ${msg}`);
    process.send('hi from child.');
})