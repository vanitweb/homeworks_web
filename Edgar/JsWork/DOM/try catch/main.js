var data = {};
try {
    data.displayInfo(); 
} catch (e) {
    console.log(`Gtnvel e sxal: data objecty chuni displayInfo Function: Uxxel`);
}

//2
var data = {
    displayInfo: {
        foo: 25
    }
};
data.displayInfo.foo = "bar"; 



//3
var thing;
function data1() {
    thing = "foo"; 
}
data1();
thing;



//4
for (var i = 0; i < 5; i++) { // > to <
    console.log(i);
}



//5
function addIfEven(num) { //= to ===
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
//6
function displayEvenNumbers() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) { // jnjel em ;
        if (numbers[i] % 2 === 0) { // = to ===
            evenNumbers.push(numbers[i]);
        }
    }
        return evenNumbers;
}
console.log(displayEvenNumbers());