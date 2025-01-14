

function* numGenerator(){

    yield 1;
    yield 2;
    yield 3;

}

const generator=numGenerator();

console.log(generator.next().value);
console.log(generator.next().value);;
console.log(generator.next().value);