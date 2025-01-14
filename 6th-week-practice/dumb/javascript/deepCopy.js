

let original={
    name:"akhil",
    details:{
        age:24,
        place:"malappuram"
    }
};

let deepCopy = JSON.parse(JSON.stringify(original));

original.name="Haris";

deepCopy.details.age = 21;

console.log(original.name);
console.log(deepCopy.name);

console.log(original.details.age);
console.log(deepCopy.details.age);

