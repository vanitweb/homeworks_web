function rev() {
	let obj = {
		Karen: 'name',
		Manukyan: 'surname'
	};
	let i;
	for (let key in obj) {
		i = key;
		key = obj[key];
		obj[key] = i;
	}
	console.log(obj);
}
rev();