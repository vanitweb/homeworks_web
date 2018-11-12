//Homeworks_11.11
//homework 1: string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function sringConcat(str) {
	let s = str.split(' ').join('-');
	s = s.toLowerCase().trim();
	return s;
}
console.log(sringConcat("Adsf rgtDsd sdrs Aewr."));
//homework 2: make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function makeShort(str, count) {
	let s = str.split(' ').splice(0, count).join(' ').trim();
	return s;
}
console.log(makeShort("dbh ff sfs ds ehdtu", 3));
//homework 3_1: find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
function findMatchesCount(str, findStr) {
	let count = 0;
	let strArr = str.split(' ');
	for(item of strArr) {
		if(item.substr(0, findStr.length) === findStr) {
			count++;
		}
	}
	return count;
}
console.log(findMatchesCount("ab abc ssjdf abk ab sfrkl", "ab"));
//homework 3_2: find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function findExactMatchesCount(str, findStr) {
	let count = 0;
	let strArr = str.split(' ');
	for(item of strArr) {
		if(item === findStr) {
			count++;
		}
	}
	return count;
}
console.log(findExactMatchesCount("ab abc ssjdf abk ab sfrkl", "ab"));