/**
 * Javascipt program to calculate the total ingredients required to-
 *  make a certain amount of cups of tea
 */
let numberofCups = prompt("Karibu! How many cups of Chai Bora would you like to make?"); // variable declaration & prompt to assign value
let i = parseInt(numberofCups); // ensure the value assigned is number

// error checking of the value assigned with pop up alert
if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a whole number');
    throw new Error();
}
// assign formulas for each ingredient variable
let waterAmt = i*200;
let milkAmt = i*50;
let teaAmt = i*1;
let sugarAmt = i*2;

// print the ingredients required
console.log('To make '+i+' cups of Kenyan Chai, you will need:');
console.log('Water: '+waterAmt+'ml');
console.log('Milk: '+milkAmt+'ml');
console.log('Tea Leaves (Majani): '+teaAmt+ ' tablespoons');
console.log('Sugar (Sukari): '+sugarAmt+' teaspoons');

