//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtd-sdrs-aewr"
console.log('ARAJADRANQ 1');
function myConcat(text, len) {
	let newText = '';
	for(let i = 1; i < text.length; i++) {
		if(i % (len + 1) != 0) {
			newText += text[i];
		}
		else {
			newText += '_';	
		}
	}
console.log(newText);
}
myConcat('hefollowingexampledisplays', 3);


//2) make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
console.log('ARAJADRANQ 2');
function countWordsString(string, num){
    let str = string.trim();
    let number = 0;
	let newString = '';
    for (i = 0; i < str.length; i++){
        if (str[i] != ' '){
        	newString += str[i];
        }
        else {
        	newString += str[i];
			number++;
			if (number < num){
			 continue;
			}
			else {break}
        }
}
console.log(newString);
}
countWordsString('  A new string representing the calli  ', 3);

//3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab");
// => "ab" is found 4 times
console.log('ARAJADRANQ 3.1');
function findRepeat (texT, f) {
	let times = 0;
	for (i = 0; i < texT.length; i++){
		if (texT[i] == f[0] && texT[i+1] == f[1]) {
				times++;
				continue;
		}
	}
console.log(`"${f}" is found  ${times} times`);
}
findRepeat('ab abghy nbbaab', 'ab');


// 3.2) find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); 
// => "ab" is found 2 times
console.log('ARAJADRANQ 3.2');
function findRepeat (textfind, f) {
	let newTextfind = ' ' + textfind + ' ';
	let times = 0;
	for (i = 1; i < newTextfind.length; i++){
		if (newTextfind[i-1] == ' ' && newTextfind[i] == f[0] && newTextfind[i+1] == f[1] && newTextfind[i+2] == ' ' ) {
				times++;
				continue;
		}
	}
console.log(`"${f}" is found  ${times} times`);
}
findRepeat('ab abc ssjdf abk ab sfrkl ab', 'ab');

//4) fill_by_length(15, 5, ['+']); => [+]00015
console.log('ARAJADRANQ 4');
function numbers(tiv, qanak, simbol){
	let k = qanak - tiv.toString().length;
	let newNumbers = '[';
	newNumbers += simbol;
	newNumbers += ']';
	for (let j = 0; j < k; j++){
		newNumbers += '0';
	}
	newNumbers = newNumbers.concat(tiv);
	console.log(newNumbers);
}
numbers(15, 5, '+');

//5) find_palindrome_words("Hello! 
//Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
console.log('ARAJADRANQ 5');
function palidrome(words) {
//function main(value) {
    let y = words.split(' ');
    for (var i = 0; i < y.length; i++) {
        newPalindrom(y[i]);
    }
}
function newPalindrom(str) {
    let r = str.toLowerCase();
    if (r == r.split('').reverse().join('')) {
        console.log(r);
    }
}
palidrome("Hello! Aba kdfk ckkc skroekr ababa");