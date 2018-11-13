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
//erku obyektneri tarberutyunner@
function diffObject(obj1, obj2) {
	let obj3 = {};
	for(let item in obj1) {
		if(obj1[item] === obj2[item]) {
			delete obj2[item];
		} else {
			obj3[item] = obj1[item];
		}
	}
	for(let item in obj2) {
		obj3[item] = obj2[item];
	}
	if(Object.keys(obj3).length === 0) {
		console.log("Trvac erku obyektner@ chunen tarberutyunner");
	} else {
		console.log(obj3);
	}
}
diffObject({a: 2, b: 2, c: 3, k: 1, p: 5, e: 4}, {a: 2, b: 2, c: 3, h: 2, d: 4});
//shrjel obyekt@
function reverseObject(obj) {
	for(let i in obj) {
		obj[obj[i]] = i;
		delete obj[i];
	}
	console.log(obj);
}
reverseObject({key1: "value1", key2: "value2", key3: "value3"});