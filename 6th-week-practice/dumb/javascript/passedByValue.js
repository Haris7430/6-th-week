

let a=13;
function valueModify(x){
    x=28;
    console.log('insidde function',x);
    
}
valueModify(a);
console.log('outerSide function',a);