

// ////// Event Emitter: Creating and handling custom events. //// //

const { response } = require("express");

// const Eventemitter= require('events');
// const eventemitter= new Eventemitter();

// eventemitter.on('greet',(message)=>{
//     console.log(message);
// })

// eventemitter.emit('greet','hello all event emitted now.....')




///// /// Server Creation (HTTP, Express): Creating servers using HTTP or Express. // ////

// const express= require('express');
// const app= express();

// app.get('/',(req,res)=>{
//     res.send('Hello world')
// }).listen(4003,()=> console.log('server running port 4000')) 




/// ///// FS Modules: File system operations (fs.readFile, fs.writeFile, etc.). /// ////

// read File:- 
// const fs= require('fs');

// fs.readFile('about.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })


// // write File:- 
// const fs=require('fs');

// fs.writeFile('info.txt','This guidelines about RDP5% processor ',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('data writed successfully');
// })



// // delete file
// const fs= require('fs');

// fs.unlink('info.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('file deleted successfully.',data);
//     }
// })



// // append File
// const fs=require('fs');

// fs.appendFile('info.txt','.This processor as perdormance is very hight and boost performence.',(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('data writed success fully');
//     }
// })



// // rename file

// const fs=require('fs')

// fs.rename('inform.txt','info.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log('file renamed successfully..');
//     }
// })





/// ///// Middleware: Using and creating middleware in Express. // ////


 


















/// // Query Parameters: Handling query parameters in requests. // ///


// const express= require('express')
// const app= express();

// app.get('/about',(req,res)=>{
//     const num1=parseFloat(req.query.num1);
//     const num2=parseFloat(req.query.num2);
//     const sum=num1+num2;

//     res.send(`total: ${sum}`)
// }).listen(4002,()=>console.log('server running port is 4002')) 




/// // Path Parameters: Handling path parameters in routes. // ///

// const express=require('express');
// const app= express();

// app.get('/data/:num1/:num2',(req,res)=>{
//     const num1= parseFloat(req.params.num1);
//     const num2= parseFloat(req.params.num2);

//     const sum= num1+num2
//     res.send(`total: ${sum}`)
// })
// .listen(3006,()=> console.log('server running port 3004'))




/// // Set Timeout: Delaying execution with setTimeout. // ///

// const express= require('express');
// const app= express();
// const port=3003;

// app.get('/',(req,res)=>{
//     setTimeout(()=>{
//         res.send('Hello worlds.');
//     },4000)
// }).listen(port,()=>console.log(`server running port ${port}`))



// // /// Set Interval: Repeated execution with setInterval. // ///

// const http= require('http');

// const server= http.createServer((req,res)=>{
    
    
//    const interval= setInterval(()=>{
//         console.log('hi bro');

//     },4000);
//    setTimeout(()=>{
//     clearInterval(interval) 
//    },9000) 
//    res.end('Hello world');
// }).listen(3003,()=>console.log('server running port 3003'))
 



// // /// Read File Sync: Synchronous file reading with fs.readFileSync. // ///

// const fs=require('fs');

// try{
// const data=fs.readFileSync('info.txt','utf-8');
// console.log(data);
// } catch(error){
//     console.log(error);
    
// }



////middleware   /////


// const express=require('express');
// const app=express();

// const middleware=((req,res,next)=>{
//     console.log(`${req.url} ${req.method}`);
//     next()
// })

// app.use(middleware);

// app.get('/',(req,res)=>{
//     res.send('hello world')
// }).listen(3008,()=>console.log('server running...'));



// const fs=require('fs').promises;

// async function readFile(filepath){
//     try{
//         const content=await fs.readFile(filepath,'utf-8');
//         console.log('File content:',content);
//     } catch (error) {
//         console.log(error);
//     }
// }
// readFile('info.txt')



///// readable stream

// const fs=require('fs');

// const readStreem= fs.createReadStream('details.txt');
//  readStreem.on('data',(result)=>{
//     console.log(result.toString);
//  })



/// writable stream ////////

// const fs=require('fs');

// const writableStream= fs.createWriteStream('writeStrm.txt');
// writableStream.write('hi evryone'); 



// const express=require('express');
// const app= express();
// const port = 4003;

// app.get('/error',(req,res,next)=>{
//    const err=new Error('something went wrong..')
//    next(err);
// })

// app.use((err,req,res,next)=>{
//    console.log(err.message);
//    res.status(500).send('server error occured')
//    next()
// }).listen(`${port}`,console.log('server runnng...'))