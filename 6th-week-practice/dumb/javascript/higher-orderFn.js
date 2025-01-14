
// higherOrderFunction:-

// Function ne argument ayi edukkuka

function greet(name){
    return `Hello, ${name}!`
}

function higherOrderFunction(callback) {
    const message = callback('john');
    console.log(message);
    
}
higherOrderFunction(greet)




// Function ne return cheyyuka

function multiplier(factor){
    return function(number) {
        return number * factor;
    };
};

const double = multiplier(2);
console.log(double(5));
