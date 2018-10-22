// Հանձնարարություն 4. 1-ից n պարզ թվեր։
let i = 1;
let j;
let n = 50;
console.log(`1-${n} պարզ թվերը։`);
console.log(`${i}`);
for (i = 2; i < n; i++) {
	var count = 0;

	for (j = 2; j <= i; j++) {
		if (i % j) {
			continue;
		}
		count += 1;
	}
	if (count == 1) console.log(i);
}