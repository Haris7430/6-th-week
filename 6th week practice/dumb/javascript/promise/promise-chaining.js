function fetchData(url,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve(`successfully data fetched ${url}`);
            } else{
                reject(`error occured ${url}`)
            }
        },delay)
    })
};

fetchData('url 1',7000)
        .then((data)=>{
            console.log(data);
            return fetchData('url 2',2100);
        })
        .then((data)=>{
            console.log(data);
            return fetchData('url 3',1200)
        })
        .then((data)=>{
            console.log(data);
            return fetchData('url 4',3000);
        })
        .then((data)=>{
            console.log(data);
            
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log('all fetching completed');
            
        })