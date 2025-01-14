

// const cluster= require('cluster');
// const http= require('http');
// const numCPUs= require('os').cpus().length;

// if(cluster.isMaster){
//     console.log(`Master process running: ${process.pid}`);

//     for(let i=0; i<numCPUs; i++){
//         cluster.fork();
//     }
// } else {
//     http.createServer((req,res)=>{
//         res.writeHead(200);
//         res.end('Hello, world!')
//     }).listen(3000, ()=>console.log(`worker process: ${process.pid}`))
// }  


