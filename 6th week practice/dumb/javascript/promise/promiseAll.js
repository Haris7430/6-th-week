

function fetchData(url,success){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
                resolve(`data fetched ${url}`);
            }else{
                reject(`errror occured ${url}`)
            }
        },2000);
    })
}
Promise.all([
    fetchData('url 1',true),
    fetchData('url 2',true),
    fetchData('url 3',true)
]).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});







