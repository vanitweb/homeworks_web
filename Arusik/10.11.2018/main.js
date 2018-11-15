//իրար միացնել տեքստերը, նրանց միջև դնելով ՛-՛ նշանը

let text = 'Adsf rgtDsd sdrs Aewr.';
let l = text.length;
text = text.replace(/ /g, '-');
text = text.slice(0, l-1);
text = text.toLowerCase();
console.log(text); 


//տեքստի մեջ կրճատել բառերի քանակը   make_short("dbh ff sfs ds ehdtu", 3); => "dbh ff sfs"
function makeShort(str, count){
	let words = str.split(' ');
	let text = ' ';
		for (let i = 0; i < count; i++){
			text += words[i];
			text += ' ';
		}
	return text;
}	
console.log(makeShort("dbh ff sfs ds ehdtu", 3));

//Տեքստի մեջ գտնել տրված բառի պարունակությունների քանակը ("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 4 times
let text = "ab abc ssjdf abk ab sfrkl";
let res = text.match(/ab/g);
console.log(`"ab" is found ${res.length} times`);


//Տեքստի մեջ գտնել տրված բառի ճշգրիտ կրկնությունների քանակը find_exact_matches_count("ab abc ssjdf abk ab sfrkl", "ab"); => "ab" is found 2 times
let text = "ab abc ssjdf abk ab sfrkl";
let res = text.match(/ab /g);
console.log(`"ab" is found ${res.length} times`);

//Տրված տեքստից արտածել պալինդրոմ բառերը find_palindrome_words("Hello! Aba kdfk ckkc skroekr ababa"); => "Aba", "ckkc", "ababa"
let text = "Hello! Aba kdfk ckkc skroekr ababa";
let text1 = text.toLowerCase();
let words = text1.split(' ');
let a = [];
	for (let i in words){
		if (words[i] === words[i].split("").reverse().join("")){
			a.push(words[i]);
		}
	}	
console.log(a);




 
 




