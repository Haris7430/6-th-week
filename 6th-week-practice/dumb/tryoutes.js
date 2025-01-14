


///// object sum finding ///

// let obj={a:23,b:18,c:89};
// let sum=0;
// for(let val in obj){
//     sum+=obj[val]
// }
// console.log(sum);



// /// // passed by value

// const value=23;
// function passedValue(x){
//     x=57;
//     console.log(x);
// }
// passedValue(value)
// console.log(value);


// ////// passed by reference

// const obj={
//     a:23
// }

// function passedReference(x){
//     x.a=78;
//     console.log(x);
// }
// passedReference(obj)
// console.log(obj);



////  arr unique printing

// let arr=[23,11,23,45,67,45,67,21];

// let uniqu=[];
// for(i=0; i<arr.length; i++){
//     let isuniqe=true
//   for(j=0; j<arr.length; j++){
//     if(arr[i]===arr[j]&& i!==j){
        
//         isuniqe=false
//         break;
//     } else {
//         isuniqe=true
//     }
//   }
//   if(isuniqe){
//     uniqu.push(arr[i])
//   }
// }
// console.log(uniqu);




//// string reverrsing

// let str='haris';
// let reverse=''
// for(i=str.length-1; i>=0; i--){
//  reverse+=str[i]
// }
// console.log(reverse);




////// arr value reversing

// const arr=[23,12,45,67,34];
// const reverse= arr.map((num)=>{
//     return parseInt(num.toString().split('').reverse().join(''))
// })
// console.log(reverse);



// ///// shallowcopy

// const obj1={
//     name:'haris',
//     age:23,
//     details:{
//         place:'pkd'
//     }
// }
// const obj2= {...obj1};
// obj2.details.place='mlprm';
// console.log(obj1.details.place);
// console.log(obj2.details.place);



//////   deepcopy

// const obj1={
//     name:'shafi',
//     age:22,
//     address:{
//         place:'pkd',
//         street:12
//     }
// }

// const obj2= (JSON.parse(JSON.stringify(obj1)));
// obj2.address.place='malappuram';
// console.log(obj1.address.place);
// console.log(obj2.address.place);



// ////// optional chaining

// const obj={
//     name:'aparna',
//     age:22,
//     details:{
//         place:'mlprm',
//         street:22
//     }
// }
// console.log(obj?.details?.place);



///////  nullish coalescing

// let value=null;
// let num=22;
// console.log(value??num);





///// largest object value delete.


// let obj={
//     a:10,
//     b:20,
//     c:40,
//     d:30
// }

// let largest=Object.keys(obj).reduce((acc,curr)=>{
//     return obj[curr]>obj[acc]?curr:acc;
// })

// delete obj[largest]
// console.log(obj);



////  find not same numbers


// let arr=[1,4,9];
// const val=[];

// let max=Math.max(...arr);
// for(i=1; i<max; i++){
//     if(!arr.includes(i)){
//         val.push(i)
//     }
// }

// console.log(val);




//////  Object.entries 

// const obj={
//     a:23,
//     b:29,
//     c:89
// }
// const entri=Object.entries(obj);
// console.log(entri);

///// Object.fromEntries

// const arr=[
//     ['a',23],
//     ['b',18],
//     ['c',89],
//     ['d',34]
// ]
// const fromEntri=Object.fromEntries(arr);
// console.log(fromEntri);



//////// recursion 

// function factorial(x){
//     if(x==0) return 1;

//     return x*factorial(x-1);
// }
// console.log(factorial(5));



////// push

// const arr=[21,34,56,77];
// arr.push(56);
// console.log(arr);


///// pop
// const arr=[45,36,78,43,22]
// arr.pop();
// console.log(arr);


///// filter()

// const arr=[11,23,56,42,11,35,78];
// const even=arr.filter((num)=>{ return num % 2==0});
// console.log(even);


///// map()

// const arr=[23,14,56,2,3,1,5];
// const multiply= arr.map((num)=> num*num);
// console.log(multiply);


///// reduce()

// const arr=[11,32,5,6,7,4];
// const sum= arr.reduce((acc,curr)=> acc+curr);
// console.log(sum);


///// every
    // every() tests whether all elements in the array 
    // pass the test implemented by the provided function.



// const arr=[11,32,5,6,7,4];
// const sum= arr.every((num)=> num>0)
// console.log(sum);


///// some()
     //// some() tests whether at least one element in the array
     // passes the test implemented by the provided function.

// const arr=[34,25,67,84,33];
// const some= arr.some((num)=> num%2==0)
// console.log(some);


//// sorting

// const arr=[23,45,22,11,57,86];
// const ascending= arr.sort((a,b)=> a-b);
// console.log(ascending);



//// concate

// const arr1=[12,13,45,23,45];
// const arr2=[67,65];
// const join=arr1.concat(arr2);
// console.log(join);


///// indexOf

// const name='Haris';
// console.log(name.indexOf('s'));


//// sllice 

// const arr=[11,23,45,67];
// const val=[... arr.slice(0,2),78,...arr.slice(2)]
// console.log(val);


///// splice

// const arr=[23,14,56,78,44];
// arr.splice(2,0,67);
// console.log(arr);



// ///// arrow function

// // const arrow= (x)=>{
// //    console.log(x*2);
// // }
// // arrow(23)


// ///// regular function

// function data(x){
//     return x*2;
// }
// console.log(data(13));


// ///// generator function 

// function* generator(x){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen=generator();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);



///// spread operator

// const arr1=[32,11,55];
// const arr2=[...arr1,44,32,22,12];
// console.log(arr2);


//// rest operator

// function collect(... y){
//     return y.map((value)=>value);
// }
// console.log(collect(11,23,78));


// const [...value]=[23,11,23,56,43]
// console.log(value);



/////// factory function

// function factory(name,age){
//     return {
//         name:name,
//         age:age,
//         greet: function (){
//             console.log(`${this.name} older ${this.age} years..`);
//         }
//     }
// }
// const person1=factory('haris',27);
// person1.greet();


// ////// cunstructur function

// function values(name,age){
//     this.name=name,
//     this.age=age,
//     this.greet= function (){
//         console.log(`i am ${this.name} older then ${this.age} years...`);
//     }
// }

// const person1=new values('vyshna',23);
// person1.greet();



//// Array.isArray &&  typeOf 

// const arr=[23,12,45];
// const arrow=(num)=>{
//     console.log(num*2);
// }
// const obj={
//     a:23,
//     b:11,
//     c:89
// }
// function data(a){
//     return a*2;
// }
// let val=342;
// let str='Haris';
// let bool=true;

// console.log(typeof(arr));
// console.log(Array.isArray(arr));
// console.log(typeof(arrow));
// console.log(typeof(obj));
// console.log(typeof(data));
// console.log(typeof(val));
// console.log(typeof(str));
// console.log(typeof(bool));



// ///// passed by value

// const value=234;
// function passeValue(x){
//     x=87;
//     console.log(x);
// }
// console.log(value);
// passeValue(value);


// ///// passed by reference

// const obj={
//     a:23,
//     b:18
// }
// function passReference(x){
//     x.a=563;
//     console.log(x.a);
// }
// passReference(obj)
// console.log(obj);




////// object largest value found..

// let obj={
//     a:34,
//     b:12,
//     c:84,
//     d:54
// }
// let largest= Math.max(... Object.values(obj));
// for(let value in obj){
//     if(largest== obj[value]){
//         delete(obj[value])
//     }
// }
// console.log(obj);



////// higer order function

// function function1(callback){
//     console.log('hello');
//     callback()
// }
// function  function2(){
//   console.log('world');
// }
// function1(function2)


///// label

// outerLoop:for(let i=0; i<3; i++){
//     for(let j=0; j<3; j++){
//         if(i==j){
//             continue outerLoop
//         }
//         console.log(i,j);
//     }
   
// }


////// encapsulation 

// class person {
//     #name;
//     constructor(name){
//         this.#name=name;
//     }
//     greet(){
//         return this.#name
//     }
// }
// const data=new person('haris');
// console.log(data.greet());


/////// static

// class value{
//     static add(a,b){
//         return a+b
//     }
// }
// console.log(value.add(2,6));


///// class inheritance

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} make sound..`);
//     }
// }
// class Dog extends Animal {
//     constructor(name){
//         super(name)
//     }
//     speak(){
//         console.log(`${this.name} bark`);
//     }
// }
// const dog=new                                                                                                                                                                                                 Dog('kriser');
// dog.speak();


//// extract string from array

// const arr=[12,'haris',34,23,'vyshan',89,'ajin'];
// const str=arr.filter((num)=> typeof num=='string');
// console.log(str);


/// array missing number;

// let arr = [1, 2, 4,12, 6, 7];
// let value=[];
// for(i=1; i<=Math.max(... arr); i++){ 
   
//    if(!arr.includes(i)){
//     value.push(i)
//    } 
// }
// console.log(value);




const fs=require('fs');

