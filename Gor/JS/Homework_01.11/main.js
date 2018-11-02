//1-20 tver@ tpel 2 varkyan@ mek
function myFunc(argument) {
	return function print(){
		let value = argument;
		if(argument <= value) {
			argument++;
			console.log(argument);
		}
	}
}
let f = myFunc(20);
setInterval(f, 2000);
