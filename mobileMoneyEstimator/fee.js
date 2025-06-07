let amountToSend = prompt("Unatuma Ngapi? (KES)");
let i = parseFloat(amountToSend);

if (isNaN(i)===true) {
    alert('ERROR: The value Entered is not a number');
    throw new Error();

}

calculateFee(i);



 function calculateFee(i){
    console.log('Sending KES '+i);

    let tFee = (i*1.5)/100;

    if (tFee<=10){
        console.log('Calculated transaction Fee: KES 10');
        console.log('Total amount to be debited: KES '+(i+10));

    }
    else if(tFee>10 && tFee<=70){
        console.log('Calculated transaction Fee: '+tFee);
        console.log('Total amount to be debited: KES '+(i+tFee));
    }
    else if(tFee>70){
        console.log('Calculated transaction Fee: KES 70');
        console.log('Total amount to be debited: KES '+(i+70));
    }

    console.log('\nSend Money Securely')

}

    



