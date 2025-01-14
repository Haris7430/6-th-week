
// sample promise

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         let success=true;
//         setTimeout(()=>{
//             if(success){
//                 resolve('data fetched successfully.!')
//             } else{
//                 reject('failed data fetching')
//             }
//         },2000)
//     })
// }

// fetchData().then(result =>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })



// async await

function fetchData(){
    return new Promise((resolve,reject)=>{
        let success=true;
        setTimeout(() => {
            if(success){
                resolve('data fetched successfully.')
            } else{
                reject('failed data fething..')
            }
        }, 2000);
    })
}

async function dataFetching(){
    try{
        const datas= await fetchData();
        console.log(datas);
    } catch(error){
        console.error(error);
        
    }
}

dataFetching()