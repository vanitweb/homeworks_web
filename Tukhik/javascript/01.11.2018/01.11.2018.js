//tpum e F1()- argumentum grvac tvic sksc mer uzac qanakov tver
 function F1(num) {
	return function f2() { 
	return ++num;
	}
}
let f3 = F1(4);
console.log(f3());
console.log(f3());
console.log(f3());
console.log(f3());
console.log(f3());
console.log(f3());

//amen 4 qayl@ mek tpel hello world
let f5 = function(){
	console.log ("hello world");
}
function F1() {
	let num = 0;
	return function f2(f5, count) {
		++num;
		if (count == num) {
		f5();
		}
	}
}
let f4 = F1();
console.log(f4(f5, 4));
console.log(f4(f5, 4));
console.log(f4(f5, 4));
console.log(f4(f5, 4));
console.log(f4(f5, 4));


