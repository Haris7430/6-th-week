

const EventEmmitter= require('events');

const eventEmmitter= new EventEmmitter();

eventEmmitter.on('userLoggedIn',(username)=>{
    console.log(`User logged in: ${username}`);
    
});

const username= 'Alice';
   Emmitter.emit('userLoggedIn',username);