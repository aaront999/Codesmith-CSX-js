function groupBy(array, callback) {
  // output: returns an object
  
  // declare a result object
  // iterate through the array
  	// if the output of calling the callback on the element has not been seen in the result object
  		// save the output as the key and set it to an array. push the element into the array
  	// otherwise, if it has been seen, push the original element into the the array
  // return result
  const result = {};
  array.forEach((element) => {
    if (!result[callback(element)]) {
      result[callback(element)] = [element];
    } else {
      result[callback(element)].push(element);
    }
  })
  return result;
}

// Test cases
const arr = [1.5, 2.2, 2.9, 1.3, 4.4];
const roundedDown = num => { return Math.floor(num); }
console.log(groupBy(arr, roundedDown));

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
