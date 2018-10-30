//reverse function
let txt = ["abc", "qwerty", "asdfgh", "zxcvbn"];
function revers(a) {
	let newTxt = "";
	for(let i = a.length - 1; i >= 0; i--) {
		newTxt += a[i];
	}
	return newTxt;
}
for(i = 0, len = txt.length; i < len; i++) {
	console.log(revers(txt[i]));
}
//calculator
let calc = function(x, y, z) {
	switch(z) {
		case '+':
		return x + y;
		case '-':
		return x - y;
		case '*':
		return x * y;
		case '/':
		return x / y;
	}
}
console.log(calc(1, 2, '+'));
console.log(calc(1, 2, '-'));
console.log(calc(1, 2, '*'));
console.log(calc(1, 2, '/'));