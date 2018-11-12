//Homeworks_11.11
//homework 1: string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function sringConcat(str) {
	let s = '';
	let strArray = str.split(' ');
	for(let item = 0, len = strArray.length - 1; item < len; item++) {
		s += strArray[item].toLowerCase();
		s += '-';
	}
	s += strArray[strArray.length - 1].toLowerCase();
	return s;
}
console.log(sringConcat("Adsf rgtDsd sdrs Aewr."));
//homework 2: make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function makeShort(str, count) {
	let s = '';
	let strArray = str.split(' ');
	strArray.splice(count + 1, strArray.length - count);
	for(let item of strArray) {
		s += item;
		s += ' ';
	}
	s = s.trim();
	return s;
}
console.log(makeShort("dbh ff sfs ds ehdtu", 3));