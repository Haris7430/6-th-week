function fetchData(url,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve(`data fetched successfully ${url}`)
            }else{
                reject(`error occured there ${url}`)
            }
        },delay)
    })
}
Promise.any([
      fetchData('url 1',2000),
      fetchData('url 2',3000),
      fetchData('url 3',1500)
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=> console.log('data fetched success fully'))