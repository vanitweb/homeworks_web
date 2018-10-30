//function fname(a){
//let b= "";
//    for(let i = a.length - 1; i >= 0; i--) {
//	b += a[i];
//}
//   console.log(b);
//}
//fname("ABCDEF");

function fname2(a, b, c,){
    switch (c){
        case "bazmapatkel":
            return a * b
            break;
        case "bajanel":
            return a / b
            break;
             case "gumarel":
            return a + b;
            break;
             case "hanel":
            return a - b;
            break;
             case "qarakusi":
            return Math.pow(a,b);
            break;
    }
}
console.log(fname2(2,4,"qarakusi"));
console.log(fname2(2,4,"gumarel"));
console.log(fname2(2,4,"bazmapatkel"));
console.log(fname2(16,4,"bajanel"));
console.log(fname2(16,4,"hanel"));


