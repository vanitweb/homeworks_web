// Հանձնարարություն 2. Ֆիբոնաչիի հաջորդականություն:

let f1 = 1;
let f2 = 1;
let n = 20;
console.log(`${f1}`);
console.log(`${f2}`);
for( i = 2; i < n; i ++){
	let f = f2;
	f2 += f1;
	f1 = f;
	console.log(`${f2}`);
}