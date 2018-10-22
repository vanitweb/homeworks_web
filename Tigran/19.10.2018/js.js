// let n = 8;
// let gum = 0;
// let sum;
// for (let i = 0; i <= n; i++) {
// 	gum += i;
// }
// sum = gum/(n+1);
// console.log(` 0 ic ${n} tveri mijin tvabanakann e ${sum} `);







let a1 = 0,
	a2 = 1,
	a3,
	n = 0;
console.log(`${a1} \n${a2}`);
while(n <= 200){ 
	
	a3 = (a1 + a2);
	a1 = a2; 
	a2 = a3;
	console.log(`${a3}`);
	n = a3 ;
	

}
console.log(`Fibonacci tver@ minchev ${n}_@`);




// 0 1 1 2 3 5 8 13 21 34 55 89 144 233


