console.log(`exercise 1`);
//ABCDEF texty shrjel
console.log("ABCDEF");
let text = "ABCDEF";
let revers = "";
for(let i = text.length - 1; i >= 0; i--) {
	revers += text[i];
}
console.log(revers);
console.log(`exercise 2`);
//20 elementanots zangvatsi zuyg u kent elementnei texery poxel 
var a =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(a);
let b =[];
for (let k = 0; k < (a.length - 1) / 2; k++) {
	b[2 * k] = a[2 * k + 1];
	b[2 * k + 1] = a[2 * k];
}
console.log (b);


console.log(`exercise 3`);
//dasavorel achman kargov
var array =[8, 12, 1, 9, 2, 6, 5, 34, 45, 3];
console.log(array);
	for (let j = 0; j < array.length - 1; j++) {
		for (let i = 0; i < array.length - 1; i++) {
			if(array[i] > array[i + 1]) {
			    let element = array[i];
			    array[i] = array[i + 1];
			    array[i + 1] = element;
			}
		}
	}
console.log(array);
console.log(`exercise 5`);
//gtnel zangvatsi elementneri mijin tvabanakany
let arr = [1, 1, 3, 3, 8, 12, 21];
let mijin=0;
for (let i =0; i<arr.length; i++) {
mijin += arr[i];
}
mijin = mijin/arr.length;
console.log(`mijin tvabanakann e " ${mijin} "` );
