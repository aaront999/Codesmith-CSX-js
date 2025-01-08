function saveOutput(callback, password) {
  // declare a cache variable set to an empty obj
	// returns a function
  	// takes an input as the first argument
  	// if the input string is equal to the password
  		// return cache
  	// otherwise, save the original input as a key to the object
  		// save the output of calling the callback on the input as its value
  let cache = {};
  return function(input) {
    if (input === password) {
      return cache;
    } else {
      cache[input] = callback(input);
      return callback(input);
    }
  }
}

// Test cases
const add2 = num => { return num + 3; }
const checkPassword = saveOutput(add2, 'hello');
console.log(checkPassword(2));
console.log(checkPassword(4));
console.log(checkPassword('hello'));

const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
