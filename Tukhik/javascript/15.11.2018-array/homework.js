//Classw0rk - trvac zangvatsy copy anel yev 1 element ays zangvatsic popxel
let parts = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
function deep(parts){
let lyrics = parts.slice();
for(i = 0; i<lyrics.length-1; i++){
if(lyrics[i].isArray === 'true'){
lyrics[i] = deep(lyrics[i]);
}
lyrics[1] = [22, 33, 44];
return lyrics;
}
} 
console.log(`arajadranq -1- ${deep(parts)}`);
console.log(parts);


//0. (Դասարանային) Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։ Օրինակ
// make_flat([1, [2], [3, [[4]]],[5,6]]) => [1, 2, 3, 4, 5, 6]
let arr0 = [1, [2, 9], [3, [4]], [5,[6,[7]]]];
function makeFlat(arr0){
	arrNew2 = [];
	for(let i = 0; i < arr0.length; i++){
		if(Array.isArray(arr0[i])) {
			arrNew2 = arrNew2.concat(makeFlat(arr0[i]));
		}
		else {
			arrNew2 = arrNew2.concat(arr0[i]);
		}
	}
return arrNew2;
}
console.log(`arajadranq 0- ${makeFlat(arr0)}`)

//1. Հաշվել զանգվածի բոլոր դրական թվերի գումարը։
let numbers = [1, -1, 3, 5, 4, -40];
const plus = numbers.filter(numbers => numbers > 0);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(plus.reduce(reducer));

//2-r tarberak
let gumar = plus.reduceRight(function(a, b){
	return a+b;
});
console.log(gumar)

// 2. Տրված զանգվածից ստանալ նոր զանգված, որի յուրաքանչյուր էլեմենտը
//տրված զանգվածի էլեմենտի կրկնապատիկն է։
let array = [1, 4, 9];
let doubles = array.map(function(num) {
  return num * 2;
});
console.log(doubles);


// 3. Գրել ֆունկցիա, որը արգումենտում կստանա օբյեկտների (մարդկանց) 
//զանգված և կսորտավորի ըստ տրված դաշտի (keyի)։ 
// Մարդ օբյեկտը պետք է ունենա անուն, ազգանուն, տարիք և գրանցման օր 
//դաշտերը։
// obj_sort(arr, ‘name’), obj_sort(arr, ‘age’) …
// let persons = [
// 	{name: Sargis, surname: Poghosyan, age: 21, regDate: (2000, 0, 1)},
// 	{name: Emma, surname: Petrosyan, age: 33, regDate: (2001, 4, 6)},
// ];
// function myFunction() {
//    
// }


//4. Գրել ֆունկցիա, որը կգտնի երկու զանգվածների չկրկնվող էլեմենտները։
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
let arr1 = [2, 1, 5, 4, 'text', [1,2], 'a'];
let arr2 = ['b', 'text', 1, 2, 4, 5]; 
let arr3 = arr1.diff(arr2);
let arr4 = arr2.diff(arr1);
let result = arr3.concat(arr4);
console.log(result);  

