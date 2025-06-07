let distanceInKm = prompt("Unafika wapi? Kilometer ngapi?");
let baseFare = 50;
let chargePerKm = 15;
let i = parseFloat(distanceInKm);

if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a number');
    throw new Error();
}

let totalFare = baseFare + (i*chargePerKm);

console.log('Uko kwote? Io ni '+i+' km');
console.log('Ukikalia Pikipiki: KES '+baseFare);
console.log('Mpaka Uko: KES '+(i*chargePerKm));
console.log('Total: KES '+totalFare);
console.log('Panda Pikipiki!');
