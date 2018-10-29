//25.10.2018 տնային աշխատանք
//homework 1
function unknown() {
	let a = 5;
	let b = 6;
	let c = 7;
	let sum = a + b + c;
	function unknown() {
		sum /= 3;
	}
	return sum;
}
console.log(unknown());
//homework 2
let a;
function factoryal() {
	let value = 10;
	let fact = 1;
	for(let i = 2; i <= value; i++) {
		fact *= i;
	}
	return fact;
}
function myFunc() {
	a = factoryal();
}
setTimeout(myFunc, 10000);
function test() {
	if(a === undefined) {
		console.log("factorial@ hashvvac che");
	} else {
		console.log(a);
	}
}
let i = setInterval(test, 2000);
function deleteInterval() {
	clearInterval(i);
}
setTimeout(deleteInterval, 20000);
