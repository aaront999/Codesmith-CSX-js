function goodKeys(obj, callback) {
  // output: returns an array
  // iterate through the obj
  	// if calling the callback on the value returns true, push it into the result array
  // return result
  const result = [];
  for (let key in obj) {
    if (callback(obj[key]) === true) {
      result.push(key);
    }
  }
  return result;
}

// Test cases
const testObj = {Milo: 'cat', Max: 'cat ear', Sarah: 'dog'};
const isCat = word => { return word.slice(0, 3).toLowerCase() === 'cat'; }
console.log(goodKeys(testObj, isCat));

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
