
function curryAdd(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(curryAdd(12)(11)(34));
