console.log("minchev 200 exac parz tvern en - " + 1);
for(let n = 2;n < 200;n++){
    let k = 2;
    for (let i = 2;i <= n/2;i++){
        if( n % i == 0) k++;
    }
    if (k == 2) console.log(n);
}
