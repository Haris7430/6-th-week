
function User(name, age){
    this.name=name;
    this.age= age;
    this.greet= function(){
        console.log(`Hello, my name is ${this.name} i am ${this.age} years old.`);
        
    }
}

const user1 = new User('Ashwant',23);
const user2 = new User('Sadhik', 25);

user1.greet();
user2.greet();