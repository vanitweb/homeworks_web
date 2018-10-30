//1-n tveri mijin tvanabakan
let a = 0;
let n = 10;
for(let i = 1; i <= n; i++) {
	a += i;
}
a /= n;
console.log(`1- ${n} tveri mijin tvanabakann e ${a}`);

//<200 fibonachii hajordakanutyun
let f1 = 1;
let f2 = 1;
let number = 200;
console.log(${f1});
console.log(${f2});
while(f2 < number) {
    if(f1 + f2 > number) {
            break;
        }
	let x = f2;
	f2 += f1;
	f1 = x;
	console.log(${f2});
}

//gtnel sharqi gumar@` 1/1!+2/2!+...+n/n!
let sum = 0;
let number1 = 50;
for(let j = 1; j <= number1; j++) {
	let fact = 1;
	for(let k = 1; k <= j; k++) {
		fact *= k;
	}
	sum += j / fact;
}
console.log(`sharqi gumar@ klini ${sum}`);