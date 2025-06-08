/**
 * Javascipt program to calculate the fare in KES after the distance is-
 *  provided in KMs
 */
let distanceInKm = prompt("Unafika wapi? Kilometer ngapi?"); // vairable declation and prompt to input the value
let baseFare = 50; // assign the base fare
let chargePerKm = 15; // assign the charge per km

let i = parseFloat(distanceInKm); // ensure the distance provided is a float

// Error chekcing of the value provided for distance & provide alert pop up
if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a number');
    throw new Error();
}

let totalFare = baseFare + (i*chargePerKm); // total fare formula

// print the results

console.log('Uko kwote? Io ni '+i+' km');
console.log('Ukikalia Pikipiki: KES '+baseFare);
console.log('Mpaka Uko: KES '+(i*chargePerKm));
console.log('Total: KES '+totalFare);
console.log('Panda Pikipiki!');
