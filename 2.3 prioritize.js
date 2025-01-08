function prioritize(array, callback) {
  // output: returns an array
  // declare a trueCache variable set to an array
  // declare a falseCache variable set to an array
  // iterate through the array
  	// if the output of calling the callback on each element returns true, 
  		// push it into trueCache
  	// otherwise, push it into falseCache
  
  // declare a result variable and concat the trueCache w/ the falseCache
  	// return result
  const trueCache = [];
  const falseCache = [];
  array.forEach((element) => {
    if (callback(element) === true) {
      trueCache.push(element);
    } else {
      falseCache.push(element);
    }
  })
  const result = trueCache.concat(falseCache);
  return result;
}

// test cases
const arr = ['family', 'Hello', 'Hi', 'all', 'great'];
const isCapital = word => { return word[0].toUpperCase() === 'H'; }
console.log(prioritize(arr, isCapital));


function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'the office', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
