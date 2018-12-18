let a = 0;
for(let i = 1; i < 10; i++){
	a += i;
}
a = a / 9;
console.log(`միջին թվաբանականն է ${a}`);
let c = 0;
let b = 1;
let d = 1; 
for (let i=2; i<5; i++){
	c = b;
	b += d;
	d = c + b;
console.log(d);
}

console.log(`exercise 1`);
//ABCDEF texty shrjel

function one1(text1) {
let revers1 = "";
for(let i = text1.length - 1; i >= 0; i--) {
	revers1 += text1[i];
}
console.log(revers1);
}
one1("Tukhik");

function one(text) {
let revers = "";
for(let i = text.length - 1; i >= 0; i--) {
	revers += text[i];
}
return revers;
}
console.log(one("45456"));


function two(p1, p2, expr) {
let p;
switch (expr) {
	case "+": 
	p = p1+p2;
	break;
	case "*": 
	p = p1*p2;
	break;
	case "-": 
	p = p1-p2;
	break;
	case "/": 
	p = p1/p2;
	break;
}
console.log(p);
}
two(3, 2, "*");

let name = function (p3, p4, expr1) {
let p0;
switch (expr1) {
	case "+": 
	p0 = p3+p4;
	break;
	case "*": 
	p0 = p3*p4;
	break;
	case "-": 
	p0 = p3-p4;
	break;
	case "/": 
	p0 = p3/p4;
	break;
}
return p0;
}
let gorcoxutyun = name(3, 2, "+");
console.log(gorcoxutyun);