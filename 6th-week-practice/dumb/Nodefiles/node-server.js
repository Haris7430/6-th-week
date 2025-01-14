

const http=require('http');

const server=http.createServer((req,res)=>{
    res.write('hi guys')
    res.end()
})

server.listen(2001,()=>(console.log('server running port 2001')));
