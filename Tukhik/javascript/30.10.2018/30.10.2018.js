//Naxadasutyan meji bareri arajin tarery metsatar sarqel
String.prototype.firstLetterCaps = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
let str = 'I am  the code'
let arr = str.split(' ')
let out = ''
for (let i = 0; i < arr.length; i++) {
    out += arr[i].firstLetterCaps() + " ";
}
console.log(out)

 //Գրել ֆունկցիա, որը դինամիկ վերադարձնում է իր անունը։
function returnName() {
	console.log(returnName.name);
}
returnName();

// Գրել F ֆունկցիա, որը արգումենտում ստանում է ֆունկցիա և մի 
// քանի թիվ և նրանց գումարը հաշվելուց հետո կանչում փոխանցված 
// ֆունկցիան ստացված արժեքով։ F ֆունկցիան պետք է կանչել 3 տեղից
// - Փոխանցել print ֆունկցիան, որը կարտածի արգումենտով ստացված 
// թիվը - F(print, 4, 5, 6)
// - Փոխանցել square ֆունկցիան, որը կարտածի արգումենտով 
// ստացված  թվի քառակուսին - F(square, 4, 5, 6)
// - Փոխանցել prime ֆունկցիան, որը կարտածի True եթե արգումենտով 
// ստացված թիվը պարզ է, False՝ հակառակ դեպքում- F(prime, 4, 5, 6) (edited)
let a = 2, b = 1, c = 1;
function bigFunction(f, a, b, c) {
	let sum = a + b + c;
	f(sum);
}
function print(f1) {
	console.log(f1);
}
function pow(f2) {
	console.log(Math.pow(f2, 2));
}
function sqrt(f3) {
	let parze = true;
	for (let i = 2; i <= Math.sqrt(f3); i++){
        if (f3 % i === 0) {
           parze = false;
        }  
    }
    console.log(parze); 
}
bigFunction(print, a, b, c);
bigFunction(pow, a, b, c);
bigFunction(sqrt, a, b, c);


// ֆունկցիա, որը հածվում է տեքստի յուր․ տառի հանդիպումների քանակը։
let str = 'abna bnm';
let c = str.split("");
let count = {};
for(let i = 0;i < c.length; i++){
	if(count[c[i]] === undefined){
		count[c[i]] = 0;
	}
	count[c[i]]++;
}
for(let j in count){
	console.log(j + ' = ' + count[j]);
	
}
// ֆունկցիա, որը դինամիկ վերադարձնում է իր անունը
function myFname(){
	console.log(arguments.callee.name);
}
myFname();