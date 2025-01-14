

class Person{
      constructor(name,age){
        this.name=name;
        this.age=age;
      }
      greet(){
        console.log(`Hi, i am ${this.name} , ${this.age} years old`);
        
      }
    }

      const person= new Person('jhon',34);
      person.greet();
