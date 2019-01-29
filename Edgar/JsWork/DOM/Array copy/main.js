
let count = 0;
const arrayLength = 6;
const myArray = new Array(arrayLength);
for (var i = 0; i < myArray.length; i++) {
  myArray[i] = new Array(arrayLength);
  for (var j = 0; j < myArray[i].length; j++) {
    myArray[i][j] = count;
    count++;
  }
}
console.log(myArray);

function swapArray(len){
    let newArray = [];
    for(let i = 0; i < len; i++){
        newArray.push([]);
    };

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            newArray[j].push(myArray[i][j]);
        }
    }

    return newArray;
}

console.log(swapArray(arrayLength));
