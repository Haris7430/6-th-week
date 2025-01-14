

// // Node.js:
// Create an Express.js application that includes two routes:
//  one that serves a static HTML file and another that
//   handles a form submission and returns the form data as JSON.

// const express= require('express');
// const path= require('path');
// const app= express();

// app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });

// app.post('/submit', (req,res)=>{
//     res.json(req.body);
// });

// app.listen(3002,()=>console.log('server running port 3002'))