//@ntercvac ev ch@ntercvac grqer
let book = [
	{author: "O'Relli", title: "JavaScript: The definitive guide", read: true},
	{author: "David Herman", title: "JavaScript", read: false},
];
function printBooks(read) {
	for(let i = 0, len = book.length; i < len; i++) {
		if(read === book[i].read) {
			console.log(book[i].author + " - " + book[i].title);
		}
	}
}
printBooks(false);
//erku obyektneri tarberutyunner@ (chi ashxatum((((   )
function diffObject(obj1, obj2) {
	let len;
	let obj3 = {};
	if(obj1.length >= obj2.length) {
		len = obj1.length;
	} else {
		len = obj2.length;
	}
	for(let i = 0; i < len; i++) {
		if(obj1[i] != obj2[i]) {
			obj3.i = obj1[i];
			obj3.i = obj2[i];
		}
	}
	console.log(obj3);
}
diffObject({a: 2, b: 2, c: 3, e: 4}, {a: 2, b: 2, c: 3, d: 4});
//shrjel obyekt@
function reverseObject(obj) {
	let ietm;
	let j;
	for(let i in obj) {
		j = i;
		item = i;
		i = obj[i];
		obj[i] = item;
		delete obj[j];
	}
	console.log(obj);
}
reverseObject({key1: "value1", key2: "value2", key3: "value3"});