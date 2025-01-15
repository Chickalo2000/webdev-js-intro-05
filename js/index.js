// Prevent us from attempting to use variables
// that are not declared
// "use strict"

/*

Write any questions that may arise in this experiment and we can discuss them in class.

Log your arrays to the console.

Create an array that holds different data types and log it the console. What happens?

Log the typeof to one array to the console. What is returned?

Remove an item from your arrays.

Add an item from your arrays.

Change the value of an element in each array.

*/

let shoppingList = ["Apricots", "Pineapple", "Raisins"];
//console.log(shoppingList);

//console.log(shoppingList[0]);

//console.log(shoppingList[1]);

//console.log(shoppingList[2]);

//shoppingList.shift();    // Removing the first element with the shift method
//console.log(shoppingList);   // Output: ["Pineapple", "Raisins"]

//shoppingList.push("Cranberries");    // Add an element to the end of our array with the push method
//console.log(shoppingList);   // Output: ["Pineapple", "Raisins", "Cranberries"]

let exampleItems = [2, "Hello", true, null, undefined];
console.log(exampleItems);  // Output: [2, "Hello", true, null, undefined]

console.log(exampleItems[0] + shoppingList[0]);  // Output: 2Apricots

console.log(typeof exampleItems);  // Output: object