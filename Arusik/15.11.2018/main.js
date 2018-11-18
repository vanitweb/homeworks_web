//Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։ Օրինակ
//make_flat([1, [2], [3, [[4]]],[5,6]]) => [1, 2, 3, 4, 5, 6]

let arr = [1, [2], [3, [[4]]],[5,6]];
function make_flat(array){
	let string = array.join(',');
	let intArr = [];
		for(i=0; i < string.length; i++){
			if(string[i] != ','){
			intArr.push(parseInt(string[i]));
			}
		}
	return intArr;
}
console.log(arr);
console.log(make_flat(arr));


// Հաշվել զանգվածի բոլոր դրական տարրերի գումարը

let array = [7, 2, 5, -8, -2]
let s = 0;
let array2 = array.filter(function(item){
	return item > 0;
});
s = array2.reduce(function(sum, item){
	return sum + item;
},0);
console.log(array);
console.log(array2);
console.log(s);


//Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտ նախորդի էլեմենտի կրկնապատիկն է

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = array.map(function(item){
	return x*2
});
console.log(array);
console.log(array2);




// Գրել ֆունկցիա, որն արգումենտում կստանա օբյեկտների (մարդկանց) զանգված, և կսորտավորի ըստ տրված դաշտի: 
//Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր: 
function dynamicSort(item) {
    let sortOrder = 1;
    if(item[0] === "-") {
        sortOrder = -1;
        item = item.substr(1);
    }
    return function (a,b) {
        let result = (a[item] < b[item]) ? -1 : (a[item] > b[item]) ? 1 : 0;
        return result * sortOrder;
    }
}
let People = [
{Name : "Ani", Surname : "Avagyan",age : 25,regdate : "16/11/2018"},
{Name: "Karine", Surname : "Dallaqyan", age : 31,regdate : "24/10/2018"},
{Name : "Davit", Surname : "Antonyan", age : 18, regdate : "01/09/2018"},
{Name : "Anna", Surname : "Haroyan", age : 26, regdate : "07/05/2017"}
];
//console.log(People.sort(dynamicSort("Name")));
//console.log(People.sort(dynamicSort("Surname")));
//console.log(People.sort(dynamicSort("regdate")));
console.log(People.sort(dynamicSort("age")));


//Գրել ֆունկցիա, որը կգտնի 2 զանգվածների չկրկնվող էլեմենտները

function diff(a, b) {
  let result = [];
  a.forEach(function(item) {
    if (b.indexOf(item) == -1) {
      result.push(item);
    }
  });
  return result;
};
let arr1 = [1, 3, 5, 6, 7, 8, 10];
let arr2 = [1, 2, 3, 4, 5, 6, 9];
console.log(arr1);
console.log(arr2);
console.log(diff(arr1,arr2).concat(diff(arr2,arr1)));


























