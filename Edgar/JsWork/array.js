//reverse start
let str = "ABCDEF";
let str2= "";
for(let i = str.length - 1; i >= 0; i--) {
	str2 += str[i];
}
console.log(str);
console.log(str2);
  //reverse end*


//Ըստ աճման կարգի
const arr3 = [1, 22, 2, 4, 10, 62, 8, 81, 9, 18];
let newResault;
console.log(arr3);
for(let i = 0; i < arr3.length-1; i++) {
	for(let j = i + 1; j < arr3.length; j++) {
		if(arr3[i] > arr3[j]) {
			newResault = arr3[i];
			arr3[i] = arr3[j];
			arr3[j] = newResault;
		}
	}
}
console.log("ajman kargov dasavorvacutyun");
console.log(arr3);


//Տեղափողություն
const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
console.log(`Սկզբնական մասիվ - [${massiv}];`);
let number;
for(let j = 0; j < massiv.length; j +=2) {
	number = massiv[j];
    massiv[j] = massiv[j+1];
	massiv[j+1] = number;

}
console.log(`Վերջնական մասիվ - [${massiv}];`);



