

const http= require('http');

const server= http.createServer((req,res)=>{
    res.write('hello world');
    res.end()
}).listen(3000,()=> console.log('server running port 3000'))