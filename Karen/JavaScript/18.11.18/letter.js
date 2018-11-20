let messag1 = {
		text: 'Barev',
		from: 'Vasya'
	}, messag2 = {
		text: 'hajox',
		from: 'David'
	};
let hish = new Map();
//
function isMessageRead(mess) {
	console.log((mess.read) ? `Read on ${hish.get(mess, new Date())} by ${mess.readUser}` : 
		"message is not yet read");
}
//
function messageRead(mess, name) {
	if (!mess.read) {
		hish.set(mess, new Date());
		mess.read = true;
		mess.readUser = name;
	}
}
// sa arajin tnayin mnacac@ erkrord
function stugum(mess) {
	console.log(!!mess.read)
}
stugum(messag2);
isMessageRead(messag2);
messageRead(messag2, 'David');
isMessageRead(messag2);
stugum(messag2);