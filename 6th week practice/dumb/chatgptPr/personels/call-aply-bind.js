

const obj={
    firstName:'Abdul',
    lastName:'Haris',
    details: function(greet){
        return (`${greet}, ${this.firstName} ${this.lastName}`)
    }
}
console.log(obj.details('Hello'));

const otherPerson={
    firstName:'Alen',
    lastName:'Biju'
}


   // call
// console.log(obj.details.call(otherPerson,'Hi'));

  // apply
// console.log(obj.details.apply(otherPerson,['Hi']));

  // bind
const bindFun= obj.details.bind(otherPerson,'Good morning')
console.log(bindFun());