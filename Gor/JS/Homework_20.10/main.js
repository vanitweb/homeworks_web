//homeworks 20.10.2018
//reverce ABCDEF
console.log("ABCDEF");
let txt = "ABCDEF";
let newTxt = "";
for(let i = txt.length - 1; i >= 0; i--) {
	newTxt += txt[i];
}
console.log(newTxt);

//zuyg u kent elementneri texapoxutyun
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for(item of array) {
	console.log(item);
}
let number;
for(let j = 0; j < 20; j += 2) {
	number = array[j];
	array[j] = array[j + 1];
	array[j + 1] = number;
}
console.log("texapoxvac zangvac@ klini");
for(item1 of array) {
	console.log(item1);
}

//ajman kargov zangvaci dasavorvacutyun
let arr = [10, 2, 5, 6, 1];
let x;
console.log("xndir3");
for(item2 of arr) {
	console.log(item2);
}
for(let n = 0; n < 4; n++) {
	for(let m = n + 1; m < 5; m++) {
		if(arr[n] > arr[m]) {
			x = arr[n];
			arr[n] = arr[m];
			arr[m] = x;
		}
	}
}
console.log("ajman kargov dasavorvacutyun");
for(item3 of arr) {
	console.log(item3);
}