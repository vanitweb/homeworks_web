//Classwork1.Գրել ֆունկցիա, որը որպես արգումենտ կստանա զանգված և կվերադարձնի կրկնօրինակված զանգված ցանկացած խորությամբ մակարդակով։
let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
function deepCopy(arr){
	let newarr = arr.slice();
	for(let i = 0; i <newarr.length; i++ ){
		if(newarr[i].isArray == 'true'){
			newarr[i] = deepCopy(newarr[i]); 
		}
	}
	newarr[1] = [22, 33, 43];
	return newarr;
}
console.log(deepCopy(arr));
console.log(arr);


//Classwork2 Գրել ֆունկցիա, որը կհարթեցնի տրված զանգվածը։ Օրինակ make_flat([1, [2], [3, [[4]]],[5,6]]) => [1, 2, 3, 4, 5, 6]
let arr2 = [1, [2], [3, [4]], [5,[6,[7]]]];
function makeFlat(arr2){
	arrNew2 = [];
	for(let i = 0; i < arr2.length; i++){
		if(Array.isArray(arr2[i])) {
			arrNew2 = arrNew2.concat(makeFlat(arr2[i]));
		} else {
			arrNew2 = arrNew2.concat(arr2[i]);
		}
	}
	return arrNew2;
}
console.log(makeFlat(arr2));

