let book = [{
	author: 'Tumanyan',
	read: true
}, {
	author: 'Aghayan',
	read: true
}, {
	author: 'Sundukyan',
	read: false
}];
function printBooks(bool) {
	let erk = book.length;
	for (let i = 0; i < erk; i++) {
		if (book[i].read && bool) {
			console.log('-' + book[i].author);
		}
		if (!book[i].read && !bool) {
			console.log('-' + book[i].author)
		}
	}
}
printBooks(true);