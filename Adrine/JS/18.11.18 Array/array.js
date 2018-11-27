//0. (Դասարանային) Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը
var array = [
    [1, [2], [4, [5, [3,[5,[8]]]]]]
];
var newArr = [];


for (var i = 0; i < array.length; i++) {
    newArr = newArr.concat(array[i]);
}

console.log(newArr);


// OR
var array = [
    [0, 1, 2],
    [3, [4], 5],
    [6, 7, 8]
];

function makeFlat(arr) {

    var result = new Array();

    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b < arr[a].length; b++) {

            result.push(arr[a][b])

        }
    }

    return result
}


console.log(makeFlat(array));


//1. Հաշվել զանգվածի բոլոր դրական թվերի գումարը
var arr = [0, 1, -1, 10, 5, -2, -3];
var sum = 0;
arr.filter(function(numbers) {
    if (numbers > 0) {
        sum += numbers;
    }
});
console.log(sum);

//2. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է
var arr = [0, 1, -1, 10, 5, -2, -3];
var square = (element) => element * 2;
var arr2 = arr.map(square);
console.log(arr);
console.log(arr2);

//4. Գրել ֆունկցիա, որը կգտնի  զանգվածի չկրկնվող էլեմենտները
var arr = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3, 3];
var n = arr.length;
var result = '';

function nonrep() {
    for (var i = 0; i < n; i++) {
        var j;
        for (j = 0; j < n; j++)
            if (i != j && arr[i] == arr[j]) {
                result = arr[i];
                break;
            }
        if (j == n)
            return arr[i];
    }
    return result;
}
console.log(nonrep());
	 

