//1-n tveri mijin tvanabakan
/*let a = 0;
let n = 10;
for(let i = 1; i <= n; i++) {
	a += i;
}
a /= n;
console.log(`1- ${n} tveri mijin tvanabakann e ${a}`);

//<200 fibonachii hajordakanutyun
let f1 = 1;
let f2 = 1;
console.log(`${f1} `);
console.log(`${f2} `);
while(f2 < 200) {
	let x = f2;
	f2 += f1;
	f1 = x;
	console.log(`${f2} `);
}

//arajadranq 3
let sum = 0;
for(let j = 1; j <= 50; j++) {
	let fact = 1;
	for(let k = 1; k <= j; k++) {
		fact *= k;
	}
	sum += j / fact;
}
console.log(`sharqi gumar@ klini ${sum}`);

//******************************
console.log('5'-6);*/

//zangvaci mijin tvabanakan
let arr = [5,4,5,3,1,6,7,4,5];
let count = 0;
for(let i of arr) {
	count += i;
}
count /= arr.length;
console.log(count);

//zangvaci amenashat handipox elementner
let arr1 = [5,4,5,3,1,6,7,4,5,];
let max = 0;
let elementValue;
let sum;
for(let j in arr1) {
	sum = 0;
	for(let k of arr1) {
		if(arr1[j] === k) {
			sum++;
		}
		if(sum > max) {
			max = sum;
			elementValue = j;
		}
	}
}
console.log(`${arr1[elementValue]} tiv@ krknvum e ${max} angam`);