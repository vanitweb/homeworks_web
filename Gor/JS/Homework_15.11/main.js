//Classwork_15.11: Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։
function makeFlat(arr) {
	return arr.reduce((accumulator, currentValue) => Array.isArray(currentValue) ? accumulator.concat(makeFlat(currentValue)) : accumulator.concat(currentValue), []);
}
console.log(makeFlat([1, [2], [3, [[4]]],[5,6]]));
//Homeworks_15.11
//homework 1: Հաշվել զանգվածի բոլոր դրական թվերի գումարը։
let arr = [-1, 0, 5, -10, 12];
let summ = 0;
arr.forEach(function (element){
	if(element > 0) {
		summ += element;
	}
});
console.log(summ);
//homework 2: Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է։
let squareArray = arr.map(function (item){
  return item * 2;
});
console.log(squareArray);
//homework 3: Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) զանգված և կսորտավորի ըստ տրված դաշտի (keyի)։ Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր դաշտերը։ obj_sort(arr, ‘name’), obj_sort(arr, ‘age’)
let users = [
	{name: 'Gor', surname: 'Manukyan', age: 21, registerDate: "16/11/2018"},
	{name: 'Edgar', surname: 'Nikoghosyan', age: 32, registerDate: "16/11/2018"},
	{name: 'David', surname: 'Manukyan', age: 27, registerDate: "16/11/2018"},
];
function sortObj(obj, sortKey) {
	obj.sort(function(a, b) {
		if(a[sortKey] > b[sortKey]) {
    		return 1;
  		}
  		if(a[sortKey] < b[sortKey]) {
    		return -1;
  		}
		return 0;
	});
	return obj;
}
console.log("Sort by name: ");
console.log(sortObj(users, 'name'));
/*console.log("Sort by surname: ");
console.log(sortObj(users, 'surname'));
console.log("Sort by age: ");
console.log(sortObj(users, 'age'));
console.log("Sort by registerDate: ");
console.log(sortObj(users, 'registerDate'));*/
//homework 4: Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։
function tarberutyunArray(arr1, arr2) {
	let newArr = [];
	let tarb1 = arr1.filter(function(currenValue) {
		return arr2.indexOf(currenValue) === -1;
	});
	let tarb2 = arr2.filter(function(currenValue) {
		return arr1.indexOf(currenValue) === -1;
	});
	newArr = tarb1.concat(tarb2);
	return newArr;
}
console.log(tarberutyunArray([1, 2, 3], [3, 4, 5]));