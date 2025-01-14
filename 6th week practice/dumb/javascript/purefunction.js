
function pure(a,b){
    return a+b
}
console.log(pure(24,34));





//impure function
 let count=0;
   function impure(){
      count++;
      console.log(count);
   }

   impure()
   impure();