

let arr=[1,2,3,4,5];
let multi=arr.map(num=> num*num);
console.log(multi);


let odd= arr.filter(val=> val%2==0);
console.log(odd);

let sum= arr.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);


