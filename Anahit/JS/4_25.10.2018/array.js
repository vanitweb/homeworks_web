/*1.
Գրելֆունկցիա, 
որը
որպես
արգումենտ
կստանա
 3 
թիվ
եւ
կվերադարձնի
զանգված
, 
որի
էլեմենտները
կլինեն
առաջին
երկու
արգումենտների
միջեւ
եղած
թվերը՝
երրորդ
թվի
ինտերվալով
 */

let arr = [];
function interval(num1,num2,step) {
    for(let num = num1, i = 0; num <= num2; num += step, i++) {
	arr[i] = num;
    }
    return arr;
}
console.log(interval(1,10,2));

/*2.
ֆւնկցիա, որը որպես արգումենտ  կստանա  նշված զանգվածը եւ կվերադարձնի այդ զանգված էլեմենտների գումարը */

function arrayElementsSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
	sum += arr[i];
    }
    return sum;
}

console.log(`${arr} զանգված էլեմենտների գումարը կլինի `);
console.log(arrayElementsSum(arr));
