//ajman kargov
const arr = [4, 1, 7, 8, 10, -5, 7, -8, -9]
console.log(arr);
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length; j++) {
		if(arr[i] < arr[j]){ 
			arr[i] = arr[i] + arr[j];
			arr[j] = arr[i] - arr[j];
			arr[i] = arr[i] - arr[j];
		}
	}
}
console.log(arr);
//var x = 455;
//var y = -999;
//console.log(x = ${x})
//console.log(y = ${y})
//x = x + y; //x=5 y=3
//y = x - y; // x=5 y=2
//x = x - y; // x3 y =2
//console.log(x = ${x})
//console.log(y = ${y})