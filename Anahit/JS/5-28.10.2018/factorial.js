//task2.Kazmer cragir vor@ khashvi faktoriali arjeq@10 vayrkyan anc, ayd @ntacqum 2 vayrkyan@ mek stugel ardyoq faktoriali arjeq@ hashvvel e, ete hashvvel e artacel faktoriali/2 arjeq@
let num;
let result;
function factorial(num) {
    result = num;
    if (num === 0 || num === 1) 
    return 1; 
    while (num > 1) { 
        num--; 
        result = result * num;
    }
   return result;
}
let funReturn = setTimeout(factorial, 10000,4);
var timer = setInterval(function() {
    if(funReturn){ 
       console.log(result / 2);
    }
}, 2000);
setTimeout(function() { 
    clearInterval(timer);
}, 12000);

