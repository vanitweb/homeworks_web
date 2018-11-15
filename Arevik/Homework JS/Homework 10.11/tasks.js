//Homeworks

//1) string_concat("Adsf rgtDsd sdrs Aewr.") => "adsf-rgtdsd-sdrs-aewr"
function func1(str) {
	let strNew1 = str.replace(/ /g, '-').toLowerCase();
	console.log(strNew1);	
}		
func1('Adsf rgtDsd sdrs Aewr.');


//2) make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function func2(str1){
	let strNew2 = str1.split(' ', 3).join(' ');
	console.log(strNew2);
}
func2('dbh ff sfs ds ehdtu');




//3.1) find_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
function func3(temp){
	let count = (temp.match(/ab/g) || []).length;
	console.log(count);
}
func3("ab abc ssjdf abk ab sfrkl");



//3.2) find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
function func4(temp1){
	let count1 = (temp1.match(/ab /g) || []).length;
	console.log(count1);
}
func4("ab abc ssjdf abk ab sfrkl");



//4) fill_by_length(15, 5[, '+']); => [+]00015
function func5(str2){
	str2 = '15'.padStart(5, "0");
	console.log('15'.padStart(5, "0"));
	console.log(str2.padStart(6, "+"));
}
func5();


//5) find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
function func6(str3){
	let arr = str3.split(' ');
	for(let i = 0; i < arr.length; i++){
		if(arr[i] === arr[i].split("").reverse().join("")){
			console.log(arr[i]);
		}
	}
}
func6("Hello! Aba kdfk ckkc skroekr ababa");


