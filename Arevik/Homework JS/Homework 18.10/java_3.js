// Հանձնարարություն 3. Ֆիբոնաչիի հաջորդականություն ցիկլով։
let n = 20;
let f1 = 1;
let f2 = 1;
let f;
console.log( f1 );
console.log( f2 );
for ( let i = 0; i < n; i++){
	if ( f = f1 +f2 ){
		f = f2;
		f2 += f1;
		f1 = f;
	    console.log( f2 );
	}
}