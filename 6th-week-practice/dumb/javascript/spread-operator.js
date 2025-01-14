
/* Explanation: Spread operator aanu nammal oru array or object-ile
 elements separate cheythu distribute cheyyan use cheyyunnath. It takes all 
elements from an array or object and "spreads" them into another array, object, or function. */




// let arr1= [23,21,12];
// let arr2= [89,34,14,];
// let combinedArray= [...arr1,...arr2];
// console.log(combinedArray);




let obje1={
    a:21,
    b:32,
    c:12,
}

let obje2= {
    d:11,
    e:1,
    f:3
}
let combined= {...obje1,...obje2}
console.log(combined);
