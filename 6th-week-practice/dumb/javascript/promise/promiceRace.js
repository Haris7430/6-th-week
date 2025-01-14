function fetchData(url,delay,success){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(success){
                resolve(`data getted ${url}`)
            }else{
                reject(`error occured ${url}`)
            }
        }, delay);
    })
}
Promise.race([
    fetchData('url 1',2000,true),
    fetchData('url 2',3000,false),
    fetchData('url 3',4000,false),
    fetchData('url 4 ',1500,true)
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
     console.log(err);
});