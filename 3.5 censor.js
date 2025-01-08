function censor() {
  // declare a cache variable set to an object
  const cache = {};
  // returns a function that acceps either 1 or 2 strings 
  	// if the arguments.length is greater than or equal to 2 
  	// save the first string as the key, and the second string as the value
  
  	// if the arguments.length is greater than or equal to 1
  	// iterate through the cache object
  	// string 1 will now equal to string1.replace each key with the value pair
  return function(string1, string2) {
    if (arguments.length >= 2) {
      cache[string1] = string2;
      return;
    }
    if (arguments.length >= 1) {
      for (let key in cache) {
        string1 = string1.replace(key, cache[key]);
      }
    }
    return string1;
  }
}

// Test cases
const checkCensor = censor();
checkCensor('Hello', 'World');
checkCensor('dogs', 'cats');
console.log(checkCensor(`Hello, It's raining dogs over here!!!`));

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
