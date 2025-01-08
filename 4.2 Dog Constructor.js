// Dog constructor function
function Dog(name, breed) {
  // Initialize properties
  this.name = name;
  this.breed = breed; 
  this.tricks = [];
}

// Learn a new trick
Dog.prototype.learnTrick = function (trick) {
  this.tricks.push(trick);
};

// Perform a trick
Dog.prototype.performTrick = function (trick) {
  // Check if the trick exists in the tricks array
  if (this.tricks.includes(trick)) {
    console.log(`${this.name} performed ${trick}!`);
  } else {
    console.log(`${this.name} doesn't know that trick.`);
  }
};

// Test cases
const fido = new Dog('Fido', 'poodle');

fido.learnTrick('fetch'); // Fido learns a new trick
fido.performTrick('fetch'); // Logs: 'Fido performed fetch!'
fido.performTrick('sit'); // Logs: 'Fido doesn't know that trick.'
