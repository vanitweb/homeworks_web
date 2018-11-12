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
	return str.toLowerCase().split(findStr).length - 1;
}
console.log(findMatchesCount("ab abc ssjdf abk ab sfAbrkl", "ab"));
//homework 3_2: find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function findExactMatchesCount(str, findStr) {
	let count = 0;
	let strArr = str.toLowerCase().split(' ');
	for(item of strArr) {
		if(item === findStr) {
			count++;
		}
	}
	return count;
}
console.log(findExactMatchesCount("ab abc ssjdf abk ab sfrkl ab", "ab"));
//homework 4: fill_by_length(15, 5[, '+']); => [+]00015
function fillByLength(num, size, sign) {
	if(size <= num.toString().length) {
		return num;
	}
	let newStr = num.toString();
	while(newStr.length < size) {
		newStr = '0' + newStr;
	}
	if(arguments[2]) {
		newStr = arguments[2] + newStr;
	}
	return newStr;
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