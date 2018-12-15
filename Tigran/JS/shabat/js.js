// let text0 = "()()(";

// function checkBrackets(text,sksvoxNish,avartvoxNish) {
// 	let count = 0;
// 	for (var i = 0; i < text.length; i++) {
// 		if (text[i] === sksvoxNish) {
// 			count++;
// 		}else if(text[i] === avartvoxNish){
// 			count--;
// 			if (count < 0) {
// 				return false;
// 			}
// 		}
// 		console.log(text[i],count);
// 	}
// 	return count === 0;
// }
// console.log(checkBrackets(text0,"(",")"))
////////////////////////////////////////////////////////////////////////////////////



let text1 = "{()<saddsa><<>dsadsa>}[((dsadsadsa)(dsadsa))<>(dsadsa{<dsasdadsa>})]";

function checkBrackets(text) {
	let countKlor = 0;
	let countDzevavor = 0;
	let countQarakusi = 0;
	let countMecPoqr = 0;
	let masiv = [];
	for(let j = 0; j < text.length; j++){
		if(text[j] === ")" || text[j] === "("
              || text[j] === ">" || text[j] === "<"
              || text[j] === "}" || text[j] === "{"
              || text[j] === "]" || text[j] === "["){
				masiv.push(text[j]);
		}
	}
	console.log(masiv);
	for (let i = 0; i < masiv.length; i++) {
		switch (masiv[i]) {
			case "(":
				countKlor++;
				break;
			case ")":
				countKlor--;
				if (countKlor < 0) {
					return false;
				}else if (masiv[i-1] === "{" || masiv[i-1] === "[" || masiv[i-1] === "<"){
					return false;
				}
			    break;
			case "{":
				countDzevavor++;
				break;
			case "}":
				countDzevavor--;
				if (countDzevavor < 0) {
					return false;
				}else if (masiv[i-1] === "[" || masiv[i-1] === "(" || masiv[i-1] === "<"){
					return false;
				}
				break;
			case "[":
				countQarakusi++;
				break;
			case "]":
				countQarakusi--;
				if (countQarakusi < 0) {
					return false;
				}else if (masiv[i-1] === "{" || masiv[i-1] === "(" || masiv[i-1] === "<"){
					return false;
				}
				break;
			case "<":
				countMecPoqr++;
				break;
			case ">":
				countMecPoqr--;
				if (countMecPoqr < 0) {
					return false;
				}else if (masiv[i-1] === "{" || masiv[i-1] === "(" || masiv[i-1] === "["){
					return false;
				}
				break;
		}
	}
	if (countKlor === 0 && countDzevavor === 0 && countQarakusi === 0 && countMecPoqr === 0) {
		return true;
	}else{
		return false;
	}
}
console.log(checkBrackets(text1));



function func(s, a, b) {
	if (s === "") {
		return -1;
	}
	if (s.lastIndexOf(a) === -1 && s.lastIndexOf(b) === -1) {
		return -1;
	}
	if (s.lastIndexOf(a) !== -1) {
		if (s.lastIndexOf(b) === -1) {
			return s.lastIndexOf(a);
		}else if(s.lastIndexOf(b) !== -1){
			if (s.lastIndexOf(a) > s.lastIndexOf(b)){
				return s.lastIndexOf(a);
			}else {
				return s.lastIndexOf(b);
			}
		}
	}else if (s.lastIndexOf(b) !== -1){
		return s.lastIndexOf(b);
	}
}