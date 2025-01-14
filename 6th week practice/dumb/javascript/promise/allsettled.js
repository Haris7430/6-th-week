



// function fetchData(url,success,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(success){
//                 resolve(`data fetched ${url}`)
//             }else{
//                 reject(`error was occured ${url}`)
//             }
//         },delay)
//     })
// }
// Promise.allSettled([
//     fetchData('url 1',true,3000),
//     fetchData('url 2',false,2000),
//     fetchData('url 3',false,5000),
//     fetchData('url 4',true,2500)
// ]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })






function fetchData(url,delay,success){
      return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            if(success){
                resolve(`data fetched ${url}`);
            } else {
                reject(`error occured ${url}`);

            }
         },delay)
      })
    }

    Promise.race([
        fetchData('url 1',3000,true),
        fetchData('url 2',2900,true),
        fetchData('url 3',1900,false)
    ]).then((data)=>{
           console.log(data);
           
    }).catch((error)=>{
        console.log(error);
        
    })


