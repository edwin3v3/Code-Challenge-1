let numberofCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
let i = parseInt(numberofCups);

if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a whole number');
}

let waterAmt = i*200;
let milkAmt = i*50;
let teaAmt = i*1;
let sugarAmt = i*2

console.log('To make '+i+' cups of Kenyan Chai, you will need:');
console.log('Water: '+waterAmt+'ml');
console.log('Milk: '+milkAmt+'ml');
console.log('Tea Leaves (Majani): '+teaAmt+ ' tablespoons');
console.log('Sugar (Sukari): '+sugarAmt+' teaspoons');

