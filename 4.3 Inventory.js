function Inventory(item, price) {
  // Initialize the inventory object with the given item
  this[item] = {
    price: price,
    quantity: 1,
  };
}

// Add the addItem method to the prototype
Inventory.prototype.addItem = function(newItem, newPrice) {
  // Check if the item already exists in the inventory
  if (this[newItem]) {
    this[newItem].quantity += 1; // Increment the quantity
    this[newItem].price = newPrice; // Update the price
  } else {
    // If the item does not exist, add it
    this[newItem] = {
      price: newPrice,
      quantity: 1,
    };
  }
};

// Add the deleteItem method to the prototype
Inventory.prototype.deleteItem = function(item) {
  if (this[item]) {
    // Check if the quantity is already 0
    if (this[item].quantity === 0) {
      return 'Nothing to delete';
    } else {
      this[item].quantity -= 1; // Decrement the quantity
      return 'Deleted';
    }
  } else {
    return 'Nothing to delete'; // Item does not exist
  }
};

// Add the checkItem method to the prototype
Inventory.prototype.checkItem = function(item) {
  // Check if the item exists in the inventory
  if (this[item]) {
    return this[item]; // Return the item object
  } else {
    return 'Item is not in inventory'; // Item does not exist
  }
};

// Test cases
const myInventory = new Inventory('cucumber', 2);

myInventory.addItem('carrot', 1);
console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
myInventory.addItem('cucumber', 3); 
console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'
