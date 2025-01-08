function arrayBuilder(obj) {
  // create a result array
  // iterate through the object
  	// define the value
  	// while the value is greater than 0, push the key into the result array
  		// decrement the value
  	// return result
  const result = [];
  for (let key in obj) {
    let value = obj[key];
    while (value > 0) {
      result.push(key);
      value -= 1;
    }
  }
  return result;
}

// Test Cases
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
