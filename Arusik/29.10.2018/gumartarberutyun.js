//Հաշվել a և b թվերի գումարը, տարբերությունը, և տարբերություն/2 (թերի)
let gum, tarb, kes;

function gumar(a, b){
	gum = a + b;
	return gum;
}
function tarberutyun(gum, a){
	tarb = gum - a;
	return tarb;
}
function qanord(tarb, c){
	kes = tarb / c;
	return kes;
}
setTimeout(console.log(gumar(8, 4)), 2000);
setTimeout(console.log(tarberutyun(gumar(8, 4), 4)), 4000);
setTimeout(console.log(qanord(tarberutyun(gumar(8, 4), 2))), 8000);