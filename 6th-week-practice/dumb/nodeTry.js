

///// error handling middleware

// const express=require('express');
// const app=express();

// app.get('/login',((req,res,next)=>{
//     const err=new Error('server was busy..');
//     next(err);
// }));
// app.use((err,req,res,next)=>{
//     console.erro(err.message);
//     res.status(500).send('server was down due to overload..')
// }).listen(5999,()=>console.log('setver running...'))



///////  router level middleware..

// const express=require('express');
// const app=express();
// const router=express.Router();

// router.use((req,res,next)=>{
//     console.log('router middleware...');
//     next()
// })
// router.get('/',((req,res)=>{
//      res.send('hello worlds..')
// }))
// app.use('/',router);
// app.listen(4009)



/////// morgan

// const express=require('express')
// const app=express()
// const morgan= require('morgan')

// app.use(morgan('dev'));
// app.get('/',((req,res,next)=>{
//     res.send('morgan status was getted suuccessfylly...')
// })).listen(4001)


//// child process creating Spawn

// const {spawn}=require('child_process');

// const child=spawn('cmd.exe',['/c','echo','Hello world...']);

// child.stdout.on('data',(data)=>{
//     console.log(`out: ${data}`);
// })
// child.stderr.on('data',(data)=>{
//     console.error(`error: ${data}`);
// })
// child.on('exite',(code)=>{
//     console.log(`exited : ${code}`);
// })


//// fork

// const {fork}= require('child_process');

// const child=fork('child.js');

// child.send('Hello from parent..');

// child.on('message',(msg)=>{
//     console.log(`hello from child: ${msg}`);
// })
// child.on('exit',(code)=>{
//     console.log(`child process exited ${code}`);
// })


//// exec 

// const {exec}= require('child_process');

// exec('dir',(error,stdout,stderr)=>{
//     if(error){
//         console.error(`Error: ${error.message}`);
//         return
        
//     }
//     if(stderr){
//         console.error(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`output: ${stdout}`);
// })
            


///// exec file

// const {execFile}= require('child_process');
// execFile('node',['-v'],(error,stdout,stderr)=>{
//     if(error){
//         console.error(`Error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.error(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`Node version: ${stdout}`);
// })



//////// query parameter

// const express=require('express');
// const app=express();

// app.get('/person',(req,res)=>{
//     const name=req.query.name;
//     const age=req.query.age;
//     res.send(`name: ${name}, age: ${age}`)
// }).listen(4006)


////// path paramete

// const express=require('express');
// const app=express();

// app.get('/person/:name/:age',(req,res)=>{
//     const name=req.params.name;
//     const age=req.params.age;
//     res.send(`name:${name}, age:${age}`)
// }).listen(4006)



///// morgan

// const express=require('express');
// const app=express();
// const morgan=require('morgan');

// app.use(morgan('dev'));
// app.get('/',(req,res)=>{
//     res.send('hello world');

// }).listen(3007)

let myMap = new Map();
myMap.set('name', 'Rahul');
myMap.set(1, 'one');
myMap.set({}, 'empty object');
console.log(myMap); // Output: Map { 'name' => 'Rahul', 1 => 'one', {} => 'empty object' }
