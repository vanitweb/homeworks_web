/*
"use strict"; ete ashxatenq es rejimov obj2.method ev a() chi ashxati, aranc es rejimi a() depqum kstananq undefined ardyunq, obj2.method depqum kstananq value1
*/
//object "this"
let obj1 = {
	key: "value",
	method: function () {
		return this.key;
	}
};
console.log(obj1.method());
let a = obj1.method;
console.log(a());
let obj2 = {
	key: "value1"
};
obj2.method = obj1.method;
console.log(obj2.method());