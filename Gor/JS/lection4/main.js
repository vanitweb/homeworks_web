//28.10.2018 lection
//havelyal argumentner
function printArguments(arg) {
  for(let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
printArguments(5, 10, 110, 22);
//1-100 parz tver@
function parzTiv(number) {
    console.log(`1-${number} patz tver@`);
    let arrayParz = [];
    let item = 3;
    arrayParz[0] = 1;
    arrayParz[1] = 2;
    arrayParz[2] = 3;
    for(let j = 4; j <= number; j++) {
        let count = 1;
        for(let k = 2; k <= Math.sqrt(j); k++) {
           if(j % k === 0) {
			 count++;
           }		
        }
	   if(count === 1) {
           arrayParz[item] = j;
           item++;
	   }  
    }
    return arrayParz;
}
console.log(parzTiv(100));
//fibonachii hajordakanutyun
function fibonachi(number) {
    let f1 = 1;
    let f2 = 1;
    let fib = [1, 1];
    let item = 2;
    while(f2 < number) {
        if(f1 + f2 > number) {
            break;
        }
        let x = f2;
        f2 += f1;
        f1 = x;
        fib[item] = f2;
        item++;
    }
    return fib;
}
console.log(fibonachi(200));