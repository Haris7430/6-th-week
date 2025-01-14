
//router level middleware


const express= require('express');
const app= express();
const router= express.Router();
const port= 4006;

router.use((req,res,next)=>{
    console.log('user Route accessed');
    next();
});

router.get('/',(req,res)=>{
    res.send('say Hello to me');
});

app.use('/user',router);

app.listen(`${port}`,()=>console.log(`server running port ${port}`)
)