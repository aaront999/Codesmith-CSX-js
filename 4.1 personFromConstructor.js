function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
  const Person = new PersonConstructor();
  Person.name = name;
  Person.age = age;
  return Person;  
}

// Test cases
const steven = personFromConstructor('Steven', 42);
steven.greet();
console.log(steven.name);
console.log(steven.age);

const mike = personFromConstructor('Mike', 30);
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'
