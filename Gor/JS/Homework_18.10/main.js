/*homework 18.10.2018*/
/*fibonachii hajordakanutyun if-ov*/
console.log(`fibonachii hajordakanutyun@ minchev 200@ if-ov`);
let f1 = 1;
let f2 = 1;
console.log(`${f1} `);
console.log(`${f2} `);
for(let i = 1; i <= 200; i++) {
	if(f1 + f2 < 200) {
		let x = f2;
		f2 += f1;
		f1 = x;
		console.log(`${f2} `);
	}
	else {
		break;
	}
}

/*1-100 parz tver@*/
console.log(`1-100 patz tver@`);
console.log(`1`);
console.log(`2`);
console.log(`3`);
for(let j = 4; j <= 100; j++) {
	let count = 0;
	for(let k = 2; k <= math.sqrt(j); k++) {
		if(j % k){
			continue;
		}
		count++;
	}
	if(count === 1){
		console.log(j);
	}
}