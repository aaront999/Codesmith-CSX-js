function multiMap(arrOfValues, arrOfCallbacks) {
  // declare a result object that will be the return
  	// iterate through the array of values
  	// create a property, the key being the original element set to an empty array
  		// iterate through the arrOfCallbacks
  		// apply the callback to each element and push into the obj's array
  	// return result
  const result = {};
  arrOfValues.forEach((element) => {
    result[element] = [];
    for (let i = 0; i < arrOfCallbacks.length; i++) {
    	result[element].push(arrOfCallbacks[i](element));
    }
  })
  return result;
}

// Test Cases
const arr = [1, 2, 3];
const minus1 = num => { return num - 1; }
const add2 = num => { return num + 2; }
const multiply2 = num => { return num * 2; }
console.log(multiMap(arr, [minus1, add2, multiply2]));


function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
