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