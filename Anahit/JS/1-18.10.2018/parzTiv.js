console.log("minchev 200 exac parz tvern en - ");
console.log(1);
for( let num = 2; num < 200; num++){
    let bajQan = 2;
    for ( let i = 2; i <= num/2; i++){
        if( num % i == 0) bajQan++;
    }
    if (bajQan == 2) console.log(num);
}
