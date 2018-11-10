//Number, Date, String, Math metodner
//trvac erkarutyamb patahakan teqsti generacum
function randomstring(len) {
	let str = '';
  	let randomchar = function() {
    let n = Math.floor(Math.random() * 62);
    if (n < 10) {
		return n; //1-10
	}
    if (n < 36) {
		return String.fromCharCode(n + 55); //A-Z
	}
	return String.fromCharCode(n + 61); //a-z
  	}
  	while (str.length < len) {
		str += randomchar();
	}
  	return str;
}
console.log(randomstring(15));
//XXXnn-xxxnn-xxxnn formati patahakan toxi generacum
function randomString(len) {
	let str = '';
	let randomNumber = function() {
		return Math.floor(Math.random() * 10); //1-10
	}
	let randomChar = function() {
    	let n = Math.floor(Math.random() * 25);
			return String.fromCharCode(n + 97); //a-z
	}
	let randomCharUp = function() {
    	let n = Math.floor(Math.random() * 25);
			return String.fromCharCode(n + 65); //A-Z
	}
	if(len <= 3) {
		for(let i = 1; i <= len; i++) {
			str += randomCharUp();
		}
		return str;
	}
	if(len <= 5) {
		for(let i = 1; i <= len - 2; i++) {
			str += randomCharUp();
		}
		for(let i = 1; i <= len - 3; i++) {
			str += randomNumber();
		}
		return str;
	}
	for(let i = 1; i <= 3; i++) {
		str += randomCharUp();
	}
	for(let i = 1; i <= 2; i++) {
		str += randomNumber();
	}
	str += '-';
	let count = Math.ceil(len / 5) - 1;
	while (str.length < len + count) {
		for(let i = 1; i <= 3; i++) {
			if(str.length === len + count) {
				break;
			}
			str += randomChar();
		}
		for(let i = 1; i <= 2; i++) {
			if(str.length === len + count) {
				break;
			}
			str += randomNumber();
		}
		if(str.length === len + count) {
			break;
		} else {
			str += '-';
		}
  	}
  	return str;
}
console.log(randomString(17));