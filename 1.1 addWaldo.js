function addWaldo(obj) {
  // iterate through the object
  // add a key 'Waldo' and it's value being 'unknown';
  	// return obj
  for (let key in obj) {
    obj['Waldo'] = 'unknown';
  }
  return obj;
}

// Test Cases
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }
