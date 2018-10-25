var mas = [2, 3, 14, 47, 87, 0, -2, 77, -100];
var sort;
for (var j = 0; j < mas.length; j++) {
	for (var i = 0; i < mas.length - j; i++) {
		if (mas[i] > mas[i + 1]) {
			sort = mas[i];
			mas[i] = mas[i + 1];
			mas[i + 1] = sort;
		} 
	}
}
for (var key in mas) {
	console.log(mas[key])
}