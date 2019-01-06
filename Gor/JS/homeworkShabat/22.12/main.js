let array = [1, 2, 5, 12, 6, 10, 8, 24, 15];
console.log(`Array before sorting: ${array}`);
array.sort(function(a, b) {
	return a - b;
});
console.log(`Array after sorting: ${array}`);
const binarySearch = function(arr, val) {
	let left = 0;
	let rigth = arr.length - 1;
	while(left <= rigth) {
		let mid = Math.floor((left + rigth) / 2);
		if(val > arr[mid]) {
			left = mid + 1;
		}
		else if(val < arr[mid]) {
			rigth = mid -1;
		}
		else {
			return mid;
		}
	}
	return -1;
}
console.log(binarySearch(array, 5));