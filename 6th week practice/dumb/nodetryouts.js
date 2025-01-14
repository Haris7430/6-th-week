


/// rest API (representational state transform) ///

// const express= require('express');
// const app= express();

// app.get('/',(req,res)=>{
//     res.send('hello world..')
// }).listen(3200,()=>console.log('server running...'))



//// Event-driven architecture ///

// const EventEmitter=require('events');
// const eventEmitter=new EventEmitter();

// eventEmitter.on('greet',()=>{
//     console.log('events emitted successfully...');
// })
// eventEmitter.emit('greet')



// event loop //

// console.log('first line');
// setTimeout(()=>{
//     console.log('middle line..');
// },3000);
// console.log('last line');



//// process.nextTick ////

// console.log('first line');
// process.nextTick(()=>{
//     console.log('second line..');
// });
// console.log('third line..');
// setTimeout(() => {
//     console.log('fourth line..');
// }, 2000);
// console.log('fifth line...');


//// timer functions ////

// setTimeout(()=>{
//     console.log('hi guys...');
// },2500)


// &&


// const intervalTime=setInterval(()=>{
//     console.log('exicuting setInterval...');
// },1500);

// setTimeout(()=>{
//     clearInterval(intervalTime)
// },7000);


// &&


// setImmediate(()=>{
//     console.log('i am setImmediate..');
// },2000);
// console.log('hi');
// setTimeout(()=>{
//     console.log('setTimeout');
// },1000);



