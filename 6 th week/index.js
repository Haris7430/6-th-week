
const mongoose= require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/user_management_system");



const express=require("express");
const app= express();

// const user_route = require('./routes/userRoute');


app.set('view engine','ejs');
app.set('views','./views/users')

// for user routes 
const userRoute = require('./routes/userRoute');
app.use('/',userRoute);

// for admin routes 
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);
    
         
app.listen(3000,function(){ 
 
    console.log(`server running port http://localhost:${3000}`);
   
});     
      
                      