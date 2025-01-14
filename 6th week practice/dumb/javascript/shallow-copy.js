
// let original={
//     name:"Alice",
//     details: {age:25,city:'Palakkad'}
// };

// let shallowCopy = { ...original };

// shallowCopy.details.age = 32;

// console.log(shallowCopy.details.age);
// console.log(original.details.age);



/* Definition: Shallow copy ennu parayunnathu, oru objectinte top-level properties oru puthiya object-il copy cheyyum,
 pakshe nested objects oru reference aayi thanne copy cheyyum. 
Ithaayathu, original object-il nested objects modify cheyyumbo shallow copy-lum aadhyam pole output kittum. */


const shallowCopy= {
    name : "Haris",
    details:{
        age:23,
        place:"klgd"
    }
};

const val={...shallowCopy};

val.name = "Ajin";

console.log(shallowCopy.name);
console.log(val.name);



