

let arr=[10,131,14112,101];
//1,2,3,2


let count=  arr.map((num)=>
    num.toString().split('').filter((val)=> val === '1').length
)
console.log(count);


