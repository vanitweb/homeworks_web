function F1 (num) {
	return function f2 () {
		console.log(num);
		return ++num;
	}
}
let f = F1(4);
f();
f();
f();
f();