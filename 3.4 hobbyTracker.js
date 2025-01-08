function hobbyTracker(hobbies) {
  // declare a cache variable set to an object
  // iterate through the hobbies and set each hobby as the key, set to 0
  const cache = {};
  hobbies.forEach((hobby) => {
    cache[hobby] = 0;
  })
	// returns a function that takes a string representing the hobby as the first param
  	// the second parameter will be an integer representing the hours practiced
  
  // iterate through the cache object
  // if the hobby string is equal to the key
  	// increment its value by the hours parameter
  return function(hobby, hours) {
    if (!arguments.length) {
      for (let key in cache) {
        cache[key] = 0;
      }
      return 'tracker has been reset!';
    }
    for (let key in cache) {
      if (hobby === key) {
        cache[key] += hours;
      }
    }
    return cache;
  } 
}

// Test cases
const hobbyCache = ['basketball', 'volleyball', 'water polo'];
const trackEachHobby = hobbyTracker(hobbyCache);
console.log(trackEachHobby('basketball', 2));
console.log(trackEachHobby('basketball', 2));
console.log(trackEachHobby('volleyball', 5));
console.log(trackEachHobby());
console.log(trackEachHobby('water polo', 1));

const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
