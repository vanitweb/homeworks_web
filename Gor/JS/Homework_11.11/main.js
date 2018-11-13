//Homeworks_11.11
//homework 1: string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function sringConcat(str) {
	return str.split(' ').join('-').toLowerCase().trim();
}
console.log(sringConcat("Adsf rgtDsd sdrs Aewr."));
//homework 2: make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function makeShort(str, count) {
	return str.split(' ').splice(0, count).join(' ').trim();
}
console.log(makeShort("dbh ff sfs ds ehdtu", 3));
//homework 3_1: find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
function findMatchesCount(str, subStr) {
	return str.toLowerCase().split(subStr).length - 1;
}
console.log(findMatchesCount("ab abc ssjdf abk ab sfAbrkl", "ab"));
//homework 3_1: erkrord exanak
function findMatchesCount1(str, subStr) {
	return (str.match(new RegExp(subStr, 'gi')) || []).length;
}
console.log(findMatchesCount1("ab abc ssjdf abk ab sfAbrkl", "ab"));
//homework 3_2: find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function findExactMatchesCount(str, subStr) {
	return (str.match(new RegExp(subStr + ' ', 'gi')) || []).length;
}
console.log(findExactMatchesCount("ab abc ssjdf abk ab sfrkl", "ab"));
//homework 4: fill_by_length(15, 5[, '+']); => [+]00015
function fillByLength(num, size, sign) {
	num += "";
	let str2 = num.padStart(size, "0");
	if(arguments[2]) {
		return str2.padStart(size + 1, sign);
	}
	return str2;
}
console.log(fillByLength(15, 5, '+'));
//homework 5: find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
function findPalidromeWords(str) {
	let strArray = str.split(' ');
	let arr = [];
	for(let item of strArray) {
		if(item.toLowerCase() === item.split('').reverse().join('').toLowerCase()) {
			arr.push(item);
		}
	}
	return arr;
}
console.log(findPalidromeWords("Hello! Aba kdfk ckkc skroekr ababa"));