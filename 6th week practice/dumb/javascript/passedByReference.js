
   ///obj///
let obj={
    value:23
}

function modifyReference(y){
    y.value=78;
    console.log('inside function',y);
    
}
modifyReference(obj);
console.log('outside function',obj);



       ///array///
// let arr= [23]

// function modifyReference(y){
//     y.push(34)
//     console.log('inside function',y);
    
// }
// modifyReference(arr);
// console.log('outside function',arr);