function number(a,b,c){
	let result = [a];
	let count = Math.floor((b - a) / c) + 1;		
	for(i = 1; i < count; i++) {
		result[i] = result[i-1] + 2;
	}
	return result;
}
function sum(array){
	let sum = 0;
	for(i = 0; i < array.length; i++ ){
    sum += array[i];	
	}
	return sum;
} 
let arr = number(1,10,2);
let sumResult = sum(arr);
console.log(arr, sumResult);