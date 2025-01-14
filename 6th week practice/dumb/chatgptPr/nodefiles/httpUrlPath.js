




const http= require('http');

const server= http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.write('welcome to home page');
    } else if(req.url=== '/about'){
        res.write('welcome to about page')
    } else if(req.url=== '/contact') {
        res.write('welcome to contact page');
    } else {
        res.write('page not found')
    }
    res.end();
})

server.listen(5000,()=>console.log('server running port 5000'))
