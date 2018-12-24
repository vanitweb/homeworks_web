let array = [1, 2, 5, 12, 6, 10, 8, 24, 15];
console.log(`Array before sorting: ${array}`);
array.sort(function(a, b) {
	return a - b;
});
console.log(`Array after sorting: ${array}`);
const binarySearch = function(arr, val) {
	let mid = Math.floor(arr.length / 2);
	if(arr.length === 0) {
		return `Array is empty`;
	}
	else if(arr.length === 1 && arr[0] !== val) {
		return `Value ${val} is not here.`
	}
	else if(arr[mid] === val) {
		return `Value ${val} is here.`;
	}
	else if(val > arr[mid]) {
		return binarySearch(arr.slice(mid, arr.length), val);
	}
	else {
		return binarySearch(arr.slice(0, mid), val);
	}
}
console.log(binarySearch(array, 5));