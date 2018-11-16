//Classwork_15.11: Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։
function makeFlat (arr) {
	let newArr = [];
	for(let i of arr) {
		if(Array.isArray(i)) {
			newArr = newArr.concat(i);
		} else {
			newArr.push(i);
		}
	}
	return newArr;
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
  return item * item;
});
console.log(squareArray);
//homework 3: Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) զանգված և կսորտավորի ըստ տրված դաշտի (keyի)։ Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր դաշտերը։ obj_sort(arr, ‘name’), obj_sort(arr, ‘age’)

//homework 4: Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։
/*function returnArray(arr1, arr2) {
	if(arr1.forEach() !== arr2.forEach()) {
		console.log()
	}
}*/