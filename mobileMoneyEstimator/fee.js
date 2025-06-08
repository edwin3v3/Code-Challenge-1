let amountToSend = prompt("Unatuma Ngapi? (KES)"); // variable declaration
let i = parseFloat(amountToSend); // ensure assigned value is a float

//error checking of value provided

if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a number');
    throw new Error('Value is not a number');

}

// Function call
calculateFee(i);


// function implementation

function calculateFee(i){
    console.log('Sending KES '+i);

    let tFee = (i*1.5)/100; // transaction fee formular

    if (tFee<=10){ // transaction fee not to go below 10
        console.log('Calculated transaction Fee: KES 10');
        console.log('Total amount to be debited: KES '+(i+10)); // amount to send + transaction fee

    }
    else if(tFee>10 && tFee<=70){ // transaction fee to remain between 10 & 70
        console.log('Calculated transaction Fee: '+tFee);
        console.log('Total amount to be debited: KES '+(i+tFee)); // amount to send + transaction fee
    }
    else if(tFee>70){// transaction fee not to exceed 70
        console.log('Calculated transaction Fee: KES 70');
        console.log('Total amount to be debited: KES '+(i+70)); // amount to send + transaction fee
    }

    console.log('\nSend Money Securely')

}