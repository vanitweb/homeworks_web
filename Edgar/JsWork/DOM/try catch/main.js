var data = {};
data.displayInfo;// jnjel em ()-y


//2
var data = {};
data.displayInfo = "bar";//jnjel em '.foo'-n



//3
function data1(){
     thing = "foo";// jnjel em var bary, u anunn em poxel vor xonflikt charajana
}
data1();
thing;



//4
for(var i=0; i < 5; i++){ // > to <
    console.log(i);
}



//5
function addIfEven(num){ //= to ===
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}
//6
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++){// jnjel em ;
        if(numbers % 2 === 0); {// = to ===
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();