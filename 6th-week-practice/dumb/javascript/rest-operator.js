
/* Explanation: Rest operator aanu nammal function arguments or destructuring-il use cheyyunnath,
 to collect all remaining elements into an array. 
It takes "the rest" of the elements and puts them into an array. */



function sum(...numbers){
    return numbers.reduce((acc,curr)=>{
        return acc+curr
    },0)
}
console.log(sum(1,2,3,4,5,6,));



// let [first,...rest]=[23,12,45,67,89];
// console.log(first);
// console.log(rest);

