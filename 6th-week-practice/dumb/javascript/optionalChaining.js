
/* Optional Chaining (?.) JavaScript-il oru useful feature aanu, 
ithu null or undefined values safe ayi access cheyyan vendi use cheyyunnu.
 Ithinte main purpose aanu nested object properties or methods access 
 cheyyumbo null or undefined errors avoid cheyyuka. */


let obj={
    name:'haris',
    greet:{
        age:23,
        place:'palakkad'
    }
}

console.log(obj?.greet?.place);
console.log(obj?.details?.mobile);
