let mas = [];
function inv (sk, vr, zz) {
	if (sk < vr && vr > zz) {
	    for (let j = sk; j <= vr; j += zz) {
		    mas.push(j);
	    }
	    console.log(mas);
	} else {
		console.log(mutqagreq cisht tver);
	}   
}	
function sum () {
	let a = mas.length, summ = 0;
	for (let i = 0; i < a; i++) {
        summ += mas[i];
	}
	console.log(`gumar@ klini ${summ}`);
}
inv (1, 10, 2);
sum();