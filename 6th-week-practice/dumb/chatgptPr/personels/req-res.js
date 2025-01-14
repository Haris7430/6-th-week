

const http=require('http');


const server= http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'Text/Plain'});
  console.log(`${req.method}, ${req.url},${req.httpVersion}`);
  console.log(`${req.headers}}`);
  res.end('hello world')
 })
 server.listen(3008,()=>console.log('server running port number 3008')) 