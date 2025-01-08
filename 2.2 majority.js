function majority(array, callback) {
  // declare a true count variable set to 0
  // declare a false count variable set to 0
  // iterate through the array
  	// if the output of calling the callback on each element gives a truthy value, increment the true count variable by 1
  	// otherwise, increment the false count variable
  
  	// if the true count is equal to the false count, return false
  		// otherwise if if true count is greater than false count, return true;
  let trueCount = 0;
  let falseCount = 0;
  array.forEach((element) => {
    if (callback(element) == true) {
      trueCount += 1;
    } else {
      falseCount += 1;
    }
  })
  
  if (falseCount >= trueCount) {
    return false;
  } else if (trueCount > falseCount) {
    return true;
  } 
}

// Test Cases 
const testArrayEqual = [1, 2, 3, 4];
const moreEvens = [1, 2, 3, 4, 6];
const moreOdds = [1, 2, 3];
const isEven = num => { return num % 2 === 0; }
console.log(majority(testArrayEqual, isEven));
console.log(majority(moreEvens, isEven));
console.log(majority(moreOdds, isEven));


const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
