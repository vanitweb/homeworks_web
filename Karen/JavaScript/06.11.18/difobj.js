function dif(obj1, obj2) {
	let obj3 = {};
	for (let i in obj1) {
		for (let j in obj2) {
			if (i == j && obj1[i] == obj2[j]) {
				delete obj1[i];
				delete obj2[j];
			} 
		}
	}
	for (let p in obj1) {
		obj3[p] = obj1[p];
	}
	for (let h in obj2) {
		obj3[h] = obj2[h];
	}
	console.log(obj3);
}
dif({r: 5, a: 1}, {b: 1, r: 5});