

function greet(greeting, punctuation){
    console.log(greeting +' '+this.name + punctuation);
    
}
const person={name:'Jhon'};
// greet.call(person, 'Hello','!');


// greet.apply(person,['Hello','! .'])


const greetVal= greet.bind(person,'Hello');
greetVal(' !');


