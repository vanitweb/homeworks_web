// Հանձնարարություն 3. Ֆիբոնաչիի հաջորդականություն ցիկլով։
let f1 = 1;
let f2 = 1;
console.log(`${f1}`);
console.log(`${f2}`);
for(let i = 1; i < 200; i++){
	if(f1 + f2 < 200){
		let f = f2;
		f2 += f1;
		f1 = f;
		console.log(`${f2}`);
	}
}