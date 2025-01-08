class Chain {
  constructor(name) {
    // Initialize the properties
    this.name = name;
    this.totalStores = 0;
    this.locations = [];
  }

  // Method to open a new store
  openStore(owner, city) {
    // Create a new Franchise object
    const newFranchise = new Franchise(owner, city);
    // Add it to the locations array
    this.locations.push(newFranchise);
    // Increment the totalStores property
    this.totalStores += 1;
  }

  // Method to close a store
  closeStore(city) {
    // Find the index of the store in the locations array
    const storeIndex = this.locations.findIndex(
      (franchise) => franchise.city === city
    );

    if (storeIndex !== -1) {
      // Remove the store from the locations array
      this.locations.splice(storeIndex, 1);
      // Decrement the totalStores property
      this.totalStores -= 1;
      console.log(`${this.name} closed the store in ${city}!`);
    } else {
      // Log the failure message
      console.log(`${this.name} doesn't have a store in ${city}.`);
    }
  }
}

// Franchise class
class Franchise {
  constructor(owner, city) {
    // Initialize properties
    this.owner = owner;
    this.city = city;
  }
}

// Test case for new chain creation
const buenoBell = new Chain('Bueno Bell');

// Test cases
buenoBell.openStore('Will', 'Phoenix');
buenoBell.openStore('Kyle', 'Austin');
buenoBell.openStore('Allison', 'Wichita');

console.log(buenoBell.totalStores); // should log 3
console.log(buenoBell.locations[0].owner); // should log 'Will'

buenoBell.closeStore('Austin'); // Should log 'Bueno Bell closed the store in Austin.'
buenoBell.closeStore('Maui'); // Should log 'Bueno Bell doesn't have a store in Maui.'
