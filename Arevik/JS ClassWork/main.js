//1.ֆունկցիայի միջոցով տեքստը շրջել հակառակ ուղղությամբ։

function reverse(str){
	let strRev = "";
	for (i = str.length-1; i >= 0; i--) {
		strRev += str[i];
}
	console.log(strRev);
}
reverse("abcdef");

//Ստեղծել ֆունկցիա, որը կկատարի մաթեմատիկական գործողություններ

 let calculate = function (a, b, text){
	let p;
	switch (text) {
		case "+":
			p = a + b;
			break;
		case "-":
			p = a - b;
			break;
		case "*":
			p = a * b;
			break;
		case "/":
			p = a / b;
			break;
	}
	return p;
}
console.log(calculate(25, 45, "+"));

//3. Ստեղծել Ֆունկցիա, որը իր յուրաքանչյուր կանչի ժամանակ արգումնետը 1-ով մեծացնում է։

function F1(num){
	return function f2(){
		return ++num;
	}
}

let f3 = F1(4);
console.log(f3());
console.log(f3());
console.log(f3());

 





