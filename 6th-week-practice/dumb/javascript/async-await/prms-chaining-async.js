

// promise chaining converted to async await.

function fetchData(url,delay) {
    return new Promise((resolve,reject)=>{
        let success=true;
        setTimeout(()=>{
            if(success){
                resolve(`successfully Data fetched ${url}`);
            } else{
                reject(`error occured ${url}`);
            }
        },delay)
    })
}


async function fetchAllData(){
    try{
        let data1= await fetchData('url 1',2000);
        console.log(data1);

        let data2= await fetchData('url 2',1700);
        console.log(data2);

        let data3= await fetchData('url 3',2100);
        console.log(data3);
        
        let data4= await fetchData('url 3', 1899);
        console.log(data4);
    } catch(error){
        console.log(error);
    } finally {
        console.log('All operations completed');
    }
}

fetchAllData();