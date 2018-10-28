
function showf(n,n1,step){
    const arr = [];
	 let j = 0;
    for(i = n; i <= n1; i += step) {
        arr[j] = i;
        j++;
    }

	return arr;

}
console.log(showf(1, 20, 2));

function showArr(arr){
    let sum = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        sum += arr[i];
    }
  return sum;
}
console.log(showArr(showf(1, 20, 2)));




