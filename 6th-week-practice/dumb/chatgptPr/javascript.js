
// 1.}
// Write a function that takes an array of numbers and returns
//  a new array with only the unique values.
//  Use JavaScript ES6 features like Set or filter.

const { setInterval } = require("timers/promises");


    // function  values(arr){
    
    // return arr.filter((num,index,array)=>{
    // return array.indexOf(num) === index;
    //     })
    // }
    // console.log((values([23,12,45,12,34,2,12])))

        //    OR

        // function values(arr){
        //     return [... new Set(arr)]
        // }
        // console.log(values([23,12,45,32,12,23,5]));




        
// 2.}
    // Write a JavaScript function that takes an array of numbers and 
    // returns an object with the count of even and odd numbers in the array.
    
    // For example, given the array [1, 2, 3, 4, 5, 6],
    //  the function should return { even: 3, odd: 3 }.

    // function count(arr){

    //     let even=0;
    //     let odd=0;
    //     arr.forEach((num)=>{
    //         if(num%2==0){
    //             even+=num;
    //         } else{
    //             odd+=num;
    //         }
    //     })
    //     return {even,odd};
    // }
    // console.log(count([11,13,24,4,8,5]));



 /*   Write a JavaScript function that takes an array of strings and returns an object where the 
    keys are the unique strings and the values are the number of times each string appears in the array.

    For example, given the array ["apple", "banana", "apple", "orange", "banana", "apple"],
     the function should return { apple: 3, banana: 2, orange: 1 }.  */ 

    // function value(arr){

    //     let result={};
    //     arr.forEach(num =>{
    //         if(result[num]){
    //             result[num]+=1;
    //         } else {
    //             result[num]=1
    //         }
    //     });
    //     return result;
    // }
    // console.log(value(["apple", "banana", "apple", "orange", "banana", "banana"]));



//   // 3).   JavaScript Practical Question:
// // Write a JavaScript function that uses async and await to
// //  fetch data from the URL https://jsonplaceholder.typicode.com/users.
// //  The function should log the names of the users to the console. 


//    async function fetchData(){
//       try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users');
//         const data= await response.json();
//         data.forEach(user => console.log(user.name));
//       } catch (error){
//         console.error('Error fetching data: ', error); 
//       }
//    }
//    fetchData();




// 4).
// JavaScript:
// Write a function that takes an array of numbers as input and returns a
//  new array where each element is the square of the original element, 
// but only for the odd numbers in the original array.


// function data(...arr){
//     let val= arr.filter(num => num%2 !==0)
//     let multiply= val.map(odd=>  odd*odd )
//     return multiply;
// }
// console.log(data(1,2,3,4,5));




// 5). 
// Write a function that flattens a nested array structure. The function should 
// take a multi-dimensional array as input and return a single-dimensional array.
  
//    function flattenArray(val){
//      let arr= val.flat(Infinity);
//      return arr;
//    }
//     console.log(flattenArray([1,23,[13,3],5,[6,8,[9,7]]]));



// //6).
// Write a function that returns a new object by merging two objects. 
//   If the same key exists in both objects,
//  the value from the second object should be used.

// function objectfunc(obj1,obj2){
//    return {...obj1,...obj2}
// };


//  const obj1={
//     a:10,
//     b:21,
//     c:13
//  }

//  const obj2={
//     b:23,
//     c:14,
//     d:45,
//     e:21
//  }

//  const mergeObject= objectfunc(obj1,obj2)

//  console.log(mergeObject);




// // 7).
// JavaScript:
// Write a function that takes an array of strings and returns 
// an object where the keys are the strings and the values are 
// the lengths of those strings.
//          stringLengths(["apple", "banana", "orange"]); // Output: {apple: 5, banana: 6, orange: 6}


// function countValue(arr){
    
//     let obj={}
//     arr.forEach(str=>{
//         obj[str]=str.length;
//     })
//     return obj;
// }

// console.log(countValue(['apple','banana','orange']));



// // 7).
// Write a function that takes an array of strings and returns 
// an array with only the strings that have a length greater than 4.

// function strings(arr){
//         return arr.filter(num => num.length>4)
//     }

//     console.log(strings(['hell','haris','man','guest','man','apple']));



// 8).
   //  Write a JavaScript function that takes an array of numbers and 
   //  returns a new array with all numbers doubled. The function should 
   //  use the map() method.

//    function doubleValue([...arr]){
//       return arr.map((num)=> num*2);
//    }
//  console.log(doubleValue([1,2,3,4,5]));



// 9).
   // Write a function that takes an array of numbers and returns
   //  the sum of all even numbers and the product of all odd numbers
   //   in an object format like { sumEven: x, productOdd: y }.

//    function datas(...arr){

//     let obj={};
//         let sumValue= arr.filter((num)=> num%2 ==0);
//         obj.suEven=sumValue.reduce((acc,curr)=>{
//             return acc+curr;
//         },0)

//         let oddmulti= arr.filter(num=> num%2 !== 0);
//         obj.producOdd=oddmulti.reduce((acc,curr)=>{
//             return acc*curr;
//         },0)
        
        

//         return obj;
//    }

//    console.log(datas(12,1,4,5,7));





// 10).
    // Shallow vs. Deep Copy: Write a function that creates both a shallow copy 
    // and a deep copy of an object, then modify the nested object in the original 
    // and check if the changes reflect in the copies.

    // function copys(values){
    //     let obj={
    //         name:'haris',
    //         age:21,
    //         address:{
    //             place:'kochi',
    //             street:12
    //         }
    //     }
    //     let shallow= ({...obj})
    //     obj.address.flatNo='4 th floor'
    //     console.log(obj.address.flatNo);
    //     console.log(shallow.address.flatNo);

    //     let deepcopy= JSON.parse(JSON.stringify(obj))
    //      obj.address.villaName= 'haris villa';

    //      console.log(obj.address.villaName);
    //      console.log(deepcopy.address);

    // }
    // copys();




// 11).
    // Task: Write a function combineArrays that takes two arrays of numbers as
    //  arguments and returns a new array with elements from both arrays, 
    // where all even numbers are doubled and all odd numbers are squared.

   
    // function combinedArrays(arr1,arr2){
    //     const arr1double= arr1.map(num=> num%2 ===0? num*2: num*num);
    //     const arr2double= arr2.map(val=> val %2 ===0? val*2: val*val);
    //     return [...arr1double,...arr2double];
    // }
    // console.log(combinedArrays([1,5,4,3],[2,4,1,5,6]));



// 12).
    // Write a JavaScript function that takes an array of numbers and 
    // returns an object containing the smallest and largest numbers
    //  in the array.


    // function numbersObj(arr){

    //     let obj={};
        
    //     obj.smallestNumber= Math.min(...arr);
    //     obj.largestNumber= Math.max(...arr);

    //     return obj;
    // }
    // console.log(numbersObj([7,14,4,8,3,23,57]));




// 13).
   // Write a function that takes an array of numbers and returns 
   // an object with the sum of even numbers and the product of odd numbers.


//    function numbers(arr){

//     let obj={};
    
//     let evenNumber= arr.filter(even=> even%2 ==0);
//     obj.evenSum= evenNumber.reduce((acc,curr)=>{
//         return acc+curr;
//     },0)

//     let oddNumber= arr.filter(odd=> odd%2 !==0);
//     obj.productOdd= oddNumber.reduce((acc,curr)=>{
//         return acc*curr;
//     },1)
  
//     return obj;
//    }

//    console.log(numbers([1,2,3,4,5]));




// 14).
    // Working with Objects: Write a function mergeAndFilter that
    //  takes two arrays of objects. Each object has name and age properties. 
    //  The function should merge the two arrays, remove any duplicates (objects with the same name), 
    //  and return an array of objects where the age is greater than 25.


    // function mergeAndFilter(arr1,arr2) {
    //     const merged= [...arr1, ...arr2];
    //     const filtered= merged.filter((obj,index,self)=>
    //         index === self.findIndex(val => val.name === obj.name && val.age > 25)
    //     );
    //     return filtered;
    // }

    // console.log(mergeAndFilter([{name:'haris', age:27}], [{name:'akshay', age:21}]));




///// // Write a JavaScript function that returns a Promise and resolves after 3 seconds?.

// const value= ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('functions resolved successfully')
//         },3000)
//     })

// }

// value().then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



//// // What is the difference between synchronous and asynchronous code execution in JavaScript? Provide an example for each ?.

// let a=20;
// let timer= setTimeout(()=>{
//     console.log('hello world');
// },3000)
// var b=32;
// var str='haris';
// console.log(a);
// console.log(timer);
// console.log(b);
// console.log(str);


///// Write a function that takes an array of numbers and returns a new array with all numbers doubled.?

// let arr=[1,2,3,4,5];
// let multiply= arr.map((num)=> num*num);
// console.log(multiply);



//// // Explain how closures work in JavaScript. Write a simple closure example that demonstrates this concept ?.


// function outerFn(){
//     console.log('i am outer..');
//     let count =0;
//     function innerFn(){
//         count++;
//         console.log('i am innerFn',count);
//     }
//     return innerFn;

// }
// const closu=outerFn();
// closu();
// closu();


//// or 

// function outerFn(x){
//     console.log('i am outerFn..');
//     let val=15;
//     function innerFn(){
//         console.log('i am innerFn.. and sum:',val+x);
//     }
//     return innerFn;
// }
// const total=outerFn(7);
// total()




/////  Write a function to find the maximum value in an array of numbers without using the built-in Math.max() function.?

// const arr=[23,12,45,67,34];
// const maxValue= arr.sort((a,b)=>b-a);
// console.log(maxValue[0]);



////// Write a JavaScript function that removes duplicates from an array without using Set.

// function data(){
//     let arr=[23,11,45,35,56,45,23,88,35];
//     let unique=[]
//     for(i=0; i<arr.length; i++){
//         let dublicate=false
//         for(j=0; j<arr.length; j++){
//             if(arr[i] == arr[j] && i !== j){
//                 dublicate=true;
//                 break;
//             }
//     }
//     if(!dublicate){
//         unique.push(arr[i])
//     }
// }
//    console.log(unique);
// }
// data();



//////// Without using the .reverse() method, write a function to reverse a string in JavaScript.

// const name='haris';
// function reversing(x){
//     return x.split('').reverse().join('');
// }
// console.log(reversing(name));


////// Write a simple async/await example in JavaScript to handle asynchronous operations.

// const fetchData= new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve('data fetched successfully...')
//     } else {
//         reject('error occured..')
//     }
// })

// async function dataFetching() {
//     try{
//         const data=await fetchData
//         console.log(data);
//     } catch(error){
//         console.error(error);
        
//     }
// }
// dataFetching()




////// Explain the concept of closures in JavaScript. How does it work?

// function outerFn(){
//     console.log('i am outerFn....');
//     let count=0
//     function innerFn(){
//         count++;
//         console.log('i am innerFn...',count);
       
//     }
//     return innerFn;
// }
// let calling=outerFn();
// calling()
// calling()

 // or

//  function outerFn(x){
    
//     console.log('i am outerFn...');
//     function innerFn(){
//         let b=14;
//         console.log('i am innerFn..',b+x);
//     }
//     return innerFn
//  }
//  let calling=outerFn(14);
//  calling()



/////  Practical: Write a function to simulate a delay of 2 seconds using Promises and setTimeout.

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('promise was resolved...')
//         },2000)
//     })
// }
// fetchData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



////// Practical: Write an async function that fetches data from an API and logs the result using async/await.

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`https://www.amazon.in/b?node=26850977031&pd_rd_w=EpVP5&content-id=amzn1.sym.b05d63bb-1345-4f6f-aa84-a4ce50056520&pf_rd_p=b05d63bb-1345-4f6f-aa84-a4ce50056520&pf_rd_r=P8G38J7QZNJ3PK50C9A2&pd_rd_wg=tOB1m&pd_rd_r=c8c13f96-0c17-4b06-902d-2bf32e79643a`)
//         },2000)
//     })
// }
// async function dataFetching(){
//     try{
//         const data=await fetchData();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }
// dataFetching()



/////  How does destructuring work in JavaScript? Explain with an example of array and object destructuring.

// const arr=[23,12,34];
// let [a,b,c]=arr;
// console.log(a,b,c);

// const obj={
//     name:'haris',
//     age:22
// }
// let [a,b]=Object.values(obj);
// console.log(a,b);


///// What is the reduce() function in JavaScript? Write code to use reduce() to sum up numbers in an array.

const arr=[11,23,45,22];
const secondlargest=arr.reduce((acc,curr)=>{
    return acc>curr?acc:curr;
})
console.log(secondlargest);