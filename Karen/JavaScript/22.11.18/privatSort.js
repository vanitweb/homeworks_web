function Washer(mode, door) {
	set Mode() {
		return mode * 2;// iskakan kod@ heto, es uxaki......
	}
	set Door() {
		if(door) {
			Run();
		} else {
			console.log('pakeq dur@');
		}
	}
	set Run() {
		return 0;
	}
	get finish() {
		return setTimeout(console.log('avart'), Mode())
	}
}
let washer = new Washer();
///////////////////////////
let fruits = ['apple', 'orange', 'pear', 'cherry'];
function sort() { 
		fruits[0] = 1;
}
fruit = new sort();
fruit._proto_ = fruits;
console.log(fruits.sort());