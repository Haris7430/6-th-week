

// Object.freeze:
// Purpose: Object-ne completely immutable aakki,
//  athinte properties modify cheyyan pattilla,
//  add cheyyan or delete cheyyan patilla.

// let obj={
//     name:'haris',
//     age:21,

// }
// Object.freeze(obj);
//  obj.name='faris'

// console.log(obj);




// Object.seal:
// Purpose: Object-ne seal cheyyumbol, existing properties modify
//  cheyyan pattum, pakshe new properties add cheyyan or existing properties 
//  delete cheyyan patilla.

let newObj={
    name:'ajin',
    age:32
}
Object.seal(newObj);
newObj.name='vyshna';
console.log(newObj);

