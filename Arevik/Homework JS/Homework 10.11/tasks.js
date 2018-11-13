//Homeworks

//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
let str = 'Adsf rgtDsd sdrs Aewr.';				
console.log(str.replace(/ /g, '-').toLowerCase());


//2) make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
let str1 = 'dbh ff sfs ds ehdtu';
console.log(str1.split(' ', 3).join(' '));


//3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
let temp = "ab abc ssjdf abk ab sfrkl";
let count = (temp.match(/ab/g) || []).length;
console.log(count);


//3.2) find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
let temp1 = "ab abc ssjdf abk ab sfrkl";
let count1 = (temp1.match(/ab /g) || []).length;
console.log(count1);


//4) fill_by_length(15, 5[, '+']); => [+]00015
let str2 = '15'.padStart(5, "0");
console.log('15'.padStart(5, "0"));
console.log(str2.padStart(6, "+"));


//5) find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
let str3 = "Hello! Aba kdfk ckkc skroekr ababa";
let arr = str3.split(' ');
for(let i = 0; i < arr.length; i++){
	if(arr[i] === arr[i].split("").reverse().join("")){
		console.log(arr[i]);
	}
}




