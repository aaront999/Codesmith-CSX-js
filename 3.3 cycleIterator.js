function cycleIterator(array) {
  // declare an index variable set to 0
  // returns a function that takes no arguments
  	// iterate through the array 
  	// return the current element while incrementing the index
  
  // if the index is equal to the array.length, reset the index to 0
  let index = 0;
  return function(input) {
    if (index === array.length) {
      index = 0;
    }
    for (let i = 0; i < array.length; i++) {
      return array[index++];
    }
  }
  
}

// Test cases
const testArray = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
const getDay = cycleIterator(testArray);
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
