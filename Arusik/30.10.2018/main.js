//արտածել տառերի կրկնությունների քանակը

function krknutyanqanak(text){
	let words = text.split('');
	let wordscount = {};
	for(i in words){
		(wordscount[words[i]] != undefined)?(wordscount[words[i]]++):(wordscount[words[i]] = 1);
	}
	console.log(wordscount);
}
krknutyanqanak("herustaashtarak");

//Վերադարձնել ֆունկցիայի անունը

function showFunctionName() {
    return showFunctionName.name;
}
console.log(showFunctionName());


//Ֆունկցիայի արգումենտում ֆունկցիա թերի
function tpel(argument) {
    console.log(argument);
}
function qarakusi(argument) {
    console.log(Math.pow(value, 2));
}


