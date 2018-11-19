//Homework1. Հաշվել զանգվածի բոլոր դրական թվերի գումարը։
let arr = [11, -22, -34, 45, 56];
var result = arr.reduce(function(sum, elem) {
	if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});

console.log(result);



//Homework2. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը տրված զանգվածի էլեմենտի կրկնապատիկն է։
let arr1 = [1, 2, 4, 6, 7];
var newArr = arr1.map(function(elem) {
	return elem * 2;
});

console.log(newArr);



//Homework3. Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) զանգված և կսորտավորի ըստ տրված դաշտի (keyի)։ Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր դաշտերը։obj_sort(arr, ‘name’), obj_sort(arr, ‘age’) …
let persons = [
	{name: 'Edgar', surname: 'Sargsyan', age: 21, regDate: '4 April 2018'},
	{name: 'Anush', surname: 'Ghazaryan', age: 33, regDate: '30 December 2017'},
	{name: 'Aram', surname: 'Manukyan', age: 65, regDate: '16 Mart 2013'},
	{name: 'Sargis', surname: 'Petrosyan', age: 40, regDate: '25 September 2010'}
];

function sortByName(a, b) {
	let nameA = a.name.toUpperCase();
	let nameB = b.name.toUpperCase();
	if (nameA > nameB) {
		return 1;
	} else if (nameA < nameB) {
		return -1;
	}
	return 0;
}

function sortByAge(a, b) {
	if (a.age > b.age) {
		return 1;
	} else if (a.age < b.age) {
		return -1;
	}
	return 0;
}
console.log(persons.sort(sortByName));
console.log(persons.sort(sortByAge));




//Homework4. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։

function differenceOf2Arrays (array1, array2) {
let temp = [];
array1 = array1.toString().split(',').map(Number);
array2 = array2.toString().split(',').map(Number);

for (let i in array1) {
	if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
}
for(let i in array2) {
	if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
}
return temp.sort((a,b) => a-b);
}

console.log(differenceOf2Arrays([1, [2], 3], [[100, 2], 1, 10]));
console.log(differenceOf2Arrays([1, [2,[3,[4]]]], [1, [2], [3, [[4]]],[5,6]]));

  















