//Task 1.Find more common js arrays element
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arr1.length; i ++){
	for (let j = i; j < arr1.length; j ++){
		if (arr1[i] == arr1[j])
		 m ++;
		if (mf < m){
		  mf = m; 
		  item = arr1[i];
		}
	}
	m = 0;
}
console.log(`${item} ( ${mf} times ) `);
