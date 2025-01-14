



 const arr=[1,2,3,4,5,6,7];

 const filtering= arr.filter(num => num%2 ==0);
 const maping= filtering.map(val => val*2)
 const reducing= maping.reduce((acc,curr)=>{
    return acc+curr;
 },0)

 console.log(maping);
 console.log(reducing);