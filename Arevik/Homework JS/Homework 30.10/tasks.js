// Task.1 Ստանալ ֆունկցիա, որը նախադասության բոլոր բառերի առային տառերը դարձնում է մեծատառ:

let myStr = "get a function that makes the captions of all the words in the sentence uppercase";
function upperLatter(myStr){
	let arr = [];
	let string = myStr.split(" ");
	for(let i = 0 ; i < string.length; i++){
		arr.push(string[i][0].toUpperCase() + string[i].slice(1)); 
    }
	return arr.join(" "); 
}
console.log(upperLatter(myStr));



//Task.2 Հաշվել տաքստում տառերի հանդիպումների քանակը։

let exampleString = 'i will practice survival skills';
let stringBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let countObject = {} ; 
function characterCount(word, character) {
	let count = 0;
    for (let i = 0; i < word.length; i++) {
		if (word[i] === character) {
			count++;
		}
	}
	return count;
}
for (let i = 0, l = stringBase.length; i < l; i++) {
	let currentChar = stringBase[i];
	countObject[currentChar] = characterCount(exampleString, currentChar);
}
console.log(countObject);



//Task.3 Գրել Ֆունկցիա, որը կվերադարձնի իր անունը

let nameFunction = function theNameOfFunction() {
    console.log( arguments.callee.name );
}
nameFunction(); 



//Task.4 Գրել Ֆունկցիա, որը արգումենտում ստանում է ֆունկցիա և մի քանի թիվ...

function F(f, a, b, c, d) {
	let sum = a + b + c +d; 
	f(sum);
}
function print(arg1) {
	console.log(arg1);
}
function square(arg2){
	console.log(arg2 * arg2);
}
function prime(arg3){
	let result = true;
	for (let i = 2; i <= arg3; i++){
		if (arg3 % i === 0) {
           result = false;
		}  
	}
	console.log(result); 
}
F(print, 4, 5, 6, 7);
F(square, 4, 5, 6, 7);
F(prime, 4, 5, 6, 7);

