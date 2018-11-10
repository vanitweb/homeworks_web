//Number, Date, String, Math metodner
function randomString(len) {
	let str = '';
	let randomNumber = function() {
		return Math.floor(Math.random() * 10);
	}
	let randomChar = function() {
    	let n = Math.floor(Math.random() * 25);
			return String.fromCharCode(n + 97);
	}
	let randomCharUp = function() {
    	let n = Math.floor(Math.random() * 25);
			return String.fromCharCode(n + 65);
	}
	let count = Math.floor(len / 5);
	for(let i = 0; i < 3; i++) {
		str += randomCharUp();
	}
	for(let i = 0; i < 2; i++) {
		str += randomNumber();
	}
	str += '-';
	while (str.length < len + count - 1) {
		for(let i = 0; i < 3; i++) {
			str += randomChar();
		}
		for(let i = 0; i < 2; i++) {
			str += randomNumber();
		}
		if(str.length === len + (count - 2)) {
			break;
		}
		str += '-';
  	}
  	return str;
}
console.log(randomString(17));