
let count = 0;
const myArray = new Array(6);
for (var i = 0; i < myArray.length; i++) {
  myArray[i] = new Array(6);
  for (var j = 0; j < myArray[i].length; j++) {
    myArray[i][j] = count;
    count++;
  }
}
console.log(myArray);

function swapArray(array, len){
    let newArray = [];
    for(let i = 0; i < len; i++){
        newArray.push([]);
    };

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            newArray[j].push(array[i][j]);
        }
    }

    return newArray;
}

console.log(swapArray(myArray, 6));
