//2. krknapatik
function masGum(mas) {
  mas = mas.map(function (tiv) {
    return tiv * 2;
  })
  console.log(mas);
}
masGum([-1, -2, 4, 5, 6, -8]);
//4.chkrknvox elementner
function tarb(mas, mas1) {
	let tar = mas.concat(mas1);
	tar = tar.filter(function (elem) {
		return mas.indexOf(elem) < 0 || mas1.indexOf(elem) < 0;
	})
	console.log(tar);
}
tarb([-1, -2, 4, 5, 6, -8], [2, 4, 6, 5, -8]);
// 0.
function tarb(mas) {
	mas = mas.join().split(',');
	console.log(mas);
}
tarb([1, [2], [3, [[4]]],[5,6]]);
//3
let	person = [{
	name: 'Karen',
	surname: 'Manukyan',
	age: 32,
	day: 2
}, {
	name: 'Vasya',
	surname: 'Petrov',
	age: 40,
	day: 31
}, {
	name: 'Pety',
	surname: 'Andersson',
	age: 22,
	day: 25
}];
function sorted(mas, key) {
		mas.sort(function (a, b) {
			return a[key] - b[key];
		})
	console.log(mas);
}
sorted(person, 'day');