let arr =[98,58,7,24,2,62,6,5,3,236,514,22,88,95];

let sorted = arr.sort(function (a,b) {return a-b;});
console.log("sorted", sorted);

function binrySearch(arr, value) {
	let high = arr.length-1;
	let low = 0;
	let mid = 0;
	while(low <= high){
		mid = Math.floor((high + low) / 2)
		if(arr[mid] == value){
			let numberIndex = find(arr,value);
			return `Number '${arr[mid]}' is found: index ${numberIndex}`;
		}else if(value > arr[mid]){
			low = mid + 1;
		}else{
			high = mid - 1;
		}
	}
	return `Number '${arr[mid]}' is  not found:`;
}

function find(array, value) {
for (var i = 0; i < array.length; i++) {
    if (array[i] == value) return i;
  }
  return -1;
}

let isFound = binrySearch(sorted, 758);
let isFound2 = binrySearch(sorted, 58);
console.log(isFound);
console.log(isFound2);