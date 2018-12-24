var data = {};
try {
	data.displayInfo();
} catch(e) {
	console.log("data1-@ displayInfo anunov funkcia chuni");
}


//2
var data = {
	displayInfo: {
		foo: "x"
	}
};
data.displayInfo.foo = "bar";
console.log(data.displayInfo.foo);



//3
var thing;
function data1() {
    thing = "foo";
}
data1();
console.log(thing);



//4
for(var i = 0; i < 5; i++) {
    console.log(i);
}



//5
function addIfEven(num) {
    if(num % 2 === 0) {
        return num + 5;
    }
    return num;
}


//6
function displayEvenNumbers() {
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
	return evenNumbers;
}
displayEvenNumbers();