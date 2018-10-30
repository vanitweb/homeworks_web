function common () {
	function sum(a, b) {
		let sum = 0;
		sum = a + b;
		console.log(sum); 
	}
	this.sumSet = function() {
		setTimeout(sum, 2000, 7, 8)
	}
	function difA(a, b) {
		let dif = 0;
		dif = a - b;
		console.log(dif);
	}
	this.difASet = function() {
		setTimeout(difA, 3000, 7, 8)
	}
	function dif2A(a, b) {
		let dif2 = 0;
		dif2 = (a - b)/2;
		console.log(dif2)
	}
	this.dif2ASet = function() {
		setTimeout(dif2A, 4000, 7, 8)
	}
}
let Common = new common();
Common.sumSet();
Common.difASet();
Common.dif2ASet();