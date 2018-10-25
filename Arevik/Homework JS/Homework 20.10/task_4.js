//Task 4. Dasavorel achman kargov
const array1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var size = array1.length;
for (let i = 0; i < size-1; ++i){
		for (let j = 0; j < size - 1; ++j){
			if(array1[i+1] < array1[j]){
				let temp = array1[j + 1];
				array1[j + 1] = array1[j];
				array1[j] = temp;
			}
		}
	}
for (var i = 0; i < size - 1; i++){
 console.log(array1[i]);
}