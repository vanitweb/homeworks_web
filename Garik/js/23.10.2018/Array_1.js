//Zuyg,kent
let arr = [10, 4, 71, 82, 5, 6, 47, 38, 9, 110];
let arr_sort = [];
for (var i in arr) {
	if (arr[i] % 2 === 0) {
        arr_sort.push(arr[i])
	}else{
        arr_sort.unshift(arr[i])
	}
}
console.log(arr_sort)
