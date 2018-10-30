//25.10.2018 տնային աշխատանք
//nerdrvac unknown funkcia
function unknown() {
	let sum = 0;
    for(let item of arguments) {
        sum += item;
    }
	function unknown(value, count) {
		return value /= count;
	}
    return unknown(sum, arguments.length);
}
console.log(unknown(10, 20, 30, 40));
//10 vayrkyan anc hashvel faktoryaly, 2 vayrkyan@ mek stugel hashvac a te che
let a;
function factoryal(value) {
	let fact = 1;
	for(let i = 2; i <= value; i++) {
		fact *= i;
	}
	return fact;
}
function myFunc() {
	a = factoryal(10);
}
setTimeout(myFunc, 10000);
function test() {
	if(a === undefined) {
		console.log("factorial@ hashvvac che");
	} else {
		console.log(a / 2);
        clearInterval(i);
	}
}
let i = setInterval(test, 2000);
//2 vayrkyanic hashvel a u b tveri gumar@, dranic 1 vayrkyan heto hashvel sum -a, dranic 1 vayrkyan heto hashvel (sum - a) / 2
function gumar(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
function tarberutyun(numberOne, numberTwo) {
    return numberOne - numberTwo;
}
function bajanum(number) {
    return number / 2;
}
function printValue(value) {
    console.log(value);
}
setTimeout(printValue, 12000, gumar(10, 20));
setTimeout(printValue, 13000, tarberutyun(gumar(10,20),10));
setTimeout(printValue, 14000, bajanum(tarberutyun(gumar(10,20),10)));