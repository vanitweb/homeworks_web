//n! հաշվարկման խնդիրը
const n = 10;
let fact = 1;
function factorial(){
	for (let i = 1; i <= n; i++){
		fact *= i;
	}
fact /= 2;
console.log(fact);
 }
setTimeout(factorial, 10000);
