//binary search algoritm
let bubbleSort = function(array) {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                let current = array[j];
                array[j] = array[j + 1];
                array[j + 1] = current;
            }
        }
    }
    console.log(array);
}

let binarySearch = function(array, value) {
    let index,
        start = 0,
        end = array.length - 1;	
	bubbleSort(array);
    while(start <= end){
        index = Math.floor((start + end) /2);
	if(array[index] === value)
	    return index;
	else if(array[index] < value)
	    start = index + 1;
	else
	    end = index - 1;	
     }
	
     console.log(`this value is out of array`);
}
let myarray = [3, 1,5,7,9,2,4,6,8,10];
console.log(binarySearch(myarray, 3));