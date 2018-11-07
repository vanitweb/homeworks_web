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
function newObject(obj1, obj2) {
	let len;
	let newObject = {};
	if(obj1.length >= obj2.length) {
		len = obj1.length;
	} else {
		len = obj2.length;
	}
	let keysOfObj1 = Object.keys(obj1);
	let keysOfObj2 = Object.keys(obj2);
	let valuesOfObj1 = Object.values(obj1);
	let valuesOfObj2 = Object.values(obj2);
	for(let i = 0; i < len; i++) {
		if(keysOfObj1[i] !== keysOfObj2[i] || valuesOfObj1[i] !== valuesOfObj2[i]) {
			newObject[keysOfObj1[i]] = valuesOfObj1[i];
			newObject[keysOfObj2[i]] = valuesOfObj2[i];
		}
	}
	console.log(newObject);
}
newObject({a: 2, b: 2, c: 3, e: 4}, {a: 2, b: 2, c: 3, d: 4});