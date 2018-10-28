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
function fun(num1,num2,interval){
    for(let i = num1; i <= num2; i += interval){
	console.log(i);
    }
}
fun(1,10,2);

/*2.
ֆւնկցիա, որը որպես արգումենտ  կստանա  նշված զանգվածը եւ կվերադարձնի այդ զանգված էլեմենտների գումարը */

function fun1(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
	sum += arr[i];
    }
    return sum;
}
let array = [5,2,7,1];
console.log(`${array} զանգված էլեմենտների գումարը կլինի `);
console.log(fun1(array));
