function findWaldo(obj) {
  // iterate through the obj
  	// if there is a key that is equal to "Waldo" 
  		// return its value
  	// otherwise, return "Where's Waldo?";
  for (let key in obj) {
    if (key === "Waldo") {
      return obj[key];
    } 
  }
  return "Where's Waldo?";
}

// Test Cases
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'
