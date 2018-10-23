for( let num = 1; num < 50; num++ ){
    let fac = num;
    for( k = num - 1 ; k  > 0; k-- ){
        fac *= k ;
    }
    console.log(num / fac);
}
