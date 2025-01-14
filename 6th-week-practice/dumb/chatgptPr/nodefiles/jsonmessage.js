




 const http= require('http');


 const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json');
    if(req.url=== '/'){
        res.write(JSON.stringify({message:'welcome to login page'}));
        res.end() 
    } else if(req.url=== '/api'){
        res.write(JSON.stringify({message:'welcome to allplication page.'}))
        res.end() 
    } else if(req.url=== '/users'){
        const users=[
            {id:1,name:'haris',age:23,place:'palakkad'},
            {id:2,name:'akshay',age:21,place:'malappuram'},
            {id:3,name:'shabeeh',age:19,place:'kozhikkod'},
            {id:4,name:'vyshna',age:21,place:'malappuram'}
        ]
        res.write(JSON.stringify(users));
        res.end() 
    } else {
        res.statusCode=404,
        res.write(JSON.stringify({error:'wrror founded'}))
        res.end() 
    }
   
 }).listen(3008,()=>console.log('server running port 3008'))