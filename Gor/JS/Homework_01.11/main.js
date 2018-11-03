//1-20 tver@ tpel 2 varkyan@ mek
function myFunc(argument) {
	let value = 1;
	return function print(){
		if(value <= argument) {
			console.log(value);
			value++;
		}
	}
}
let f = myFunc(20);
setInterval(f, 2000);
//grel mySetInterval funkcia
