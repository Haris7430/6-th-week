

/// generator function ///

// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gen= generator()
// console.log(gen.next().value);
// console.log(gen.next().value);




/// class creating ///

// class User{
//     constructor(name,age){
//         this.name= name;
//         this.age= age;
//     }
//     greet(){
//         console.log(`my  name is ${this.name} , i am ${this.age} years old..`);
//     }
// }

// const user1= new User('haris',23);
// const user2= new User('alen', 21);

// user1.greet()



// // pure function //

// function greet(num1,num2){
//     return num1+num2;
// }
// console.log(greet(11,23));


// // impure function // //

// let count=0;
// function  imp(){
//     return count++;
// }
// console.log(imp());
// console.log(imp());


// // call by value && call by reference // ///

// function vallue(x) {
//     x= x*2;
//     console.log('function value: ',x);
// }

// let a=10;
// vallue(a);
// console.log('outside function: ',a);



// function  reference(obj){
//     obj.a= obj.a*2;
// }
// let obj={a:12};
// reference(obj.a);
// console.log('inner function: ',obj);


// // shallow copy & deep copy // //


// const val='haris';

// let a=''
// for(i=val.length-1; i>=0; i--) {
//    a+=val[i]
// }
// console.log(a);



