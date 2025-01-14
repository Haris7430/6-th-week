

const express= require('express');
const app= express();

app.use(express.json());

app.post('/submit', (req,res)=>{
    const data= req.body;
    res.json(data);
});

const port=4002;

app.listen(port,()=> console.log(`server running ${port}`)) 