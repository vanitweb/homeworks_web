//1.The range step's task
function range(first, second, step) {
    let arr = [];
    for (let i = first; i <= second; i += step) {
        arr.push(i);
    }
    return arr;
}
console.log(range(5, 30, 3));

//2.The received array element's sum
function sum(arr) {
    let sum = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum(range(5, 30, 3)));