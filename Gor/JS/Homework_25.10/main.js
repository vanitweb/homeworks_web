//25.10.2018 տնային աշխատանք
//միջակայքի խնդիր
function myFunc(numberOne, numberTwo, step) {
    let arr = [];
    arrIndex = 0;
    for(i = numberOne; i <= numberTwo; i += step) {
        arr[arrIndex] = i;
        arrIndex++;
    }
    return arr;
}
console.log(myFunc(1, 20, 2));
function summArray(arr) {
    let summ = 0;
    for(i = 0, len = arr.length; i < len; i++) {
        summ += arr[i];
    }
    return summ;
}
console.log(summArray(myFunc(1, 20, 2)));